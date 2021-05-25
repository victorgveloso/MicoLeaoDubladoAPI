import { getRouter as gerDefaultRouter } from 'stremio-addon-sdk';
import bodyParser from 'body-parser';
import disassembleMovie from './persistence/controllers/movie-assembler';
import disassembleSeries from './persistence/controllers/series-assembler';
import MetaDAO from './persistence/controllers/meta-dao';
import StreamDAO from './persistence/controllers/stream-dao';
import { AddonInterface } from './persistence/models/stremio';
import MovieDTO, { MovieMagnet } from './persistence/models/transfer-objects/movie';
import { IStream } from './persistence/models/stream';
import SeriesDTO, { SeriesMagnet } from './persistence/models/transfer-objects/series';
import ContentDTO, { BaseMagnet } from './persistence/models/transfer-objects/content';


export async function upsertContentData <T extends BaseMagnet> (content: ContentDTO<T>, fn: (c: ContentDTO<T>)=>any) {
    let metaDao = new MetaDAO();
    let streamDao = new StreamDAO();

    const {
        meta,
        streams
    } = fn(content);

    await metaDao.addIfAbsent(meta);
    await streams.map((m: IStream) => {
        streamDao.addIfAbsent(m)
    });
}

/** 
 * getRouter is a Proxy to the default getRouter 
 * It includes our custom endpoints
 */
export function getRouter(addonInterface: AddonInterface) {
    const router = gerDefaultRouter(addonInterface);

    router.use(bodyParser.json()); // to support JSON-encoded bodies
    router.use(bodyParser.urlencoded({ // to support URL-encoded bodies
        extended: true
    }));

    router.post('/movie', (req: any, res: any) => {

        upsertContentData<MovieMagnet>(req.body as MovieDTO, disassembleMovie)
            .then(() => res.send(200))
            .catch(err => res.send(err))
    });

    router.post('/series', (req: any, res: any) => {

        upsertContentData<SeriesMagnet>(req.body as SeriesDTO, disassembleSeries)
            .then(() => res.send(200))
            .catch(err => res.send(err))
    })

    return router;
}