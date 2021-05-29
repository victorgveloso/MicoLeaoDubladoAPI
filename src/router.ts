import { getRouter as gerDefaultRouter } from 'stremio-addon-sdk';
import bodyParser from 'body-parser';
import disassembleMovie from './persistence/controllers/movie-assembler';
import disassembleSeries from './persistence/controllers/series-assembler';
import MetaDAO from './persistence/controllers/meta-dao';
import StreamDAO from './persistence/controllers/stream-dao';
import { AddonInterface } from './persistence/models/stremio';
import MovieDTO from './persistence/models/transfer-objects/movie';
import { IStream } from './persistence/models/stream';
import SeriesDTO from './persistence/models/transfer-objects/series';
import { IMeta } from './persistence/models/meta';


export async function upsertContentData({meta, streams}: {
    meta: IMeta;
    streams: IStream[];
}) {
    let metaDao = new MetaDAO();
    let streamDao = new StreamDAO();

    await metaDao.addIfAbsent(meta);
    streams.map((m: IStream) => {
        streamDao.addIfAbsent(m);
    });
}

/**
 * getRouter is a Proxy to the default getRouter 
 * It includes our custom endpoints
 * @param addonInterface the addon's main object
 * @returns the modified router
 */
export function getRouter(addonInterface: AddonInterface) {
    const router = gerDefaultRouter(addonInterface);

    router.use(bodyParser.json()); // to support JSON-encoded bodies
    router.use(bodyParser.urlencoded({ // to support URL-encoded bodies
        extended: true
    }));

    router.post('/movie', (req: any, res: any) => {

        
        upsertContentData(disassembleMovie(req.body as MovieDTO))
            .then(() => res.sendStatus(200))
            .catch(err => res.sendStatus(err))
    });

    router.post('/series', (req: any, res: any) => {

        upsertContentData(disassembleSeries(req.body as SeriesDTO))
            .then(() => res.sendStatus(200))
            .catch(err => res.sendStatus(err));
    });

    return router;
}