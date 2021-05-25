
import fs from 'fs';
import path from 'path';
import express from 'express';
import { getRouter as getDefaultRouter } from 'stremio-addon-sdk';
let landingTemplate = require('stremio-addon-sdk/src/landingTemplate');
let opn = require('opn');
import { AddressInfo } from "net";
import { AddonInterface } from './persistence/models/stremio';
import { Server } from 'http';
export class HttpServer {
	addonInterface: AddonInterface
	opts: {
        port?: number;
        /**
         * (in seconds) cacheMaxAge means the Cache-Control header being set to max-age=$cacheMaxAge
         */
        cacheMaxAge?: number;
		cache?: number;
        /**
         * Static directory to serve.
         */
        static?: string;
		/**
		 * Custom router param. If undefined stremio's default router is used
		 */
		getRouter?: (o: AddonInterface) => any;
    }
	app: express.Express
	constructor(addonInterface: AddonInterface, opts = {}) {
		this.addonInterface = addonInterface;
		this.opts = opts;
		this.app = this.createCachedServer();
	}

	serve(): Promise<{url: string, server: Server}> {
		this.serveAPI();
		this.serveStatic();
		this.serveLandingPage();
		return this.start();
	}

	private createCachedServer() : express.Express {
		if (this.addonInterface.constructor.name !== 'AddonInterface') {
			throw new Error('first argument must be an instance of AddonInterface');
		}
	
		const cacheMaxAge = this.opts.cacheMaxAge || this.opts.cache;
	
		if (cacheMaxAge && cacheMaxAge > 365 * 24 * 60 * 60) {
			console.warn('cacheMaxAge set to more then 1 year, be advised that cache times are in seconds, not milliseconds.');
		}
	
		const app = express();
		app.use((_, res, next) => {
			if (cacheMaxAge && !res.getHeader('Cache-Control')) {
				res.setHeader('Cache-Control', 'max-age=' + cacheMaxAge + ', public');
			}
			next();
		})
		return app;
	}
	
	private serveAPI() {
		this.app.use(this.getRouter());
	}

	private getRouter() {
		return this.opts.getRouter ? this.opts.getRouter(this.addonInterface) : getDefaultRouter(this.addonInterface);
	}

	private serveStatic() {
		if (this.opts.static) {
			const location = path.join(process.cwd(), this.opts.static);
			if (!fs.existsSync(location)) {
				throw new Error('directory to serve does not exist');
			}
			this.app.use(this.opts.static, express.static(location));
		}
	}

	private serveLandingPage() {
		const landingHTML = landingTemplate(this.addonInterface.manifest);
		this.app.get('/', (_, res) => {
			res.setHeader('content-type', 'text/html');
			res.end(landingHTML);
		});

	}

	private start() : Promise<{url: string, server: Server}> {
		const server = this.app.listen(this.opts.port);
		return new Promise(function (resolve, reject) {
			server.on('listening', function () {
				const addr = server.address() as AddressInfo;
				const url = `http://127.0.0.1:${addr.port}/manifest.json`;
				console.log('HTTP addon accessible at:', url);
				if (process.argv.includes('--launch')) {
					const base = 'https://staging.strem.io#';
					//const base = 'https://app.strem.io/shell-v4.4#';
					const installUrl = `${base}?addonOpen=${encodeURIComponent(url)}`;
					opn(installUrl);
				}
				if (process.argv.includes('--install')) {
					opn(url.replace('http://', 'stremio://'));
				}
				resolve({
					url,
					server
				});
			});
			server.on('error', reject);
		});
	}
}