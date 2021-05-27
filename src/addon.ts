import MetaDAO from './persistence/controllers/meta-dao';
import StreamDAO from './persistence/controllers/stream-dao';
import { IMeta } from './persistence/models/meta';
import { IStream } from './persistence/models/stream';
import { Args } from './persistence/models/stremio';

export async function createCatalogHandler(args: Args): Promise<{ metas: IMeta[] }> {
    let metaDao = new MetaDAO();
    const skip = args.extra!.skip || 0;
    const limit = 100;
    let result: { metas: IMeta[] } = { metas: [] };
    if (args.extra!.search) {
        try {
            result = {
                metas: await metaDao.getByName(args.extra!.search, skip, limit)
            };
        } catch (error) {
            console.error("Catalog Handler ERROR");
            throw error;
        }
    } else if (args.type === 'movie') {
        if (args.extra!.genre) {
            try {
                result = {
                    metas: await metaDao.getByGenre(args.id, args.extra!.genre, skip, limit)
                };
            } catch (error) {
                console.error("Catalog Handler ERROR");
                throw error;
            }
        }
        else {
            try {
                result = {
                    metas: await metaDao.getByCatalogId(args.id, skip, limit)
                };
            } catch (error) {
                console.error("Catalog Handler ERROR");
                throw error;
            }
        }
    }
    return result;
}

export async function createStreamHandler(args: Args) : Promise<{ streams: IStream[] }> {
    let streamDao = new StreamDAO();
    let result: { streams: IStream[] } = { streams: [] };
    try {
        if (args.type === 'movie') {
            result = { streams: await streamDao.getByMetaId(args.id) };
        }
        /* TODO: It should not be necessary to use another method (getByStreamId is an ugly solution) */
        else if (args.type === 'series') {
            result = { streams: await streamDao.getByStreamId(args.id) };
        }
    } catch (error) {
        console.error(`Stream Handler ERROR: ${error}`);
    }
    return result;
}