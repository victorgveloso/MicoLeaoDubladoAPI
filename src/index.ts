import {
    connection
} from 'mongoose';
import {
    PORT,
    connect
} from './config';
import ManifestDAO from './persistence/controllers/manifest-dao';
import {
    getRouter
} from './router';
import {
    HttpServer
} from './HttpServer';
import {
    addonBuilder
} from 'stremio-addon-sdk';
import {
    createCatalogHandler,
    createStreamHandler
} from './addon';
import Manifest, { IManifest } from './persistence/models/manifest';
import defaultManifest from './persistence/models/stub/manifest.json';
import { AddonInterface } from './persistence/models/stremio';

connect().then((mongo_uri) => {
    console.log(`MONGO URI: ${mongo_uri}`);
}).catch(console.error);

connection.once('open', () => {
    let manifestDao = new ManifestDAO()
    manifestDao.get()
        .then((manifest) => {
            init(manifest);
        })
        .catch((error) => {
            console.error("[Warning] Something went wrong!");
            console.error(error);
            console.error("[Warning] Falling back to default manifest");
            init(new Manifest(defaultManifest));
        });
});

function init(manifest: IManifest) {
    new HttpServer(setupAddonInterface(manifest), {
        port: PORT,
        getRouter
    }).serve().then(({
        url
    }) => {
        console.log(`Listening on ${url}`);
        // publishToCentral('https://stremio-brazilian-addon.herokuapp.com/manifest.json');
    }).catch((error) => {
        console.error("Couldn't start http server!");
        console.error(error);
    });
}

function setupAddonInterface(manifest: IManifest) : AddonInterface {
    const builder = new addonBuilder(manifest.toObject());
    builder.defineStreamHandler(createStreamHandler);
    builder.defineCatalogHandler(createCatalogHandler);
    return builder.getInterface() as AddonInterface;
}