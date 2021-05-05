import { getRouter as gerDefaultRouter } from 'stremio-addon-sdk';
import bodyParser from 'body-parser';
import disassemble from './persistence/controllers/movie-assembler';
import MetaDAO from './persistence/controllers/meta-dao';
import StreamDAO from './persistence/controllers/stream-dao';


export async function upsertMovieData(movie: any) {
    let metaDao = new MetaDAO();
    let streamDao = new StreamDAO();

    const {
        meta,
        streams
    } = disassemble(movie);

    await metaDao.addIfAbsent(meta);
    await streams.map((m: any) => {
        streamDao.addIfAbsent(m)
    });
}

/** 
 * getRouter is a Proxy to the default getRouter 
 * It includes our custom endpoints
 */
export function getRouter(addonInterface: any) {
    const router = gerDefaultRouter(addonInterface);

    router.use(bodyParser.json()); // to support JSON-encoded bodies
    router.use(bodyParser.urlencoded({ // to support URL-encoded bodies
        extended: true
    }));

    router.post('/movie', (req: any, res: any) => {

        upsertMovieData(req.body)
            .then(() => res.send(200))
            .catch(err => res.send(err))
    });

    return router;
}