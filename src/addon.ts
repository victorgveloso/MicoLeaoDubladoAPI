import MetaDAO from './persistence/controllers/meta-dao';
import StreamDAO from './persistence/controllers/stream-dao';
import { IMeta } from './persistence/models/meta';
import { IStream } from './persistence/models/stream';
import { Args } from './persistence/models/stremio';
/**
 * Addon's controller for catalog-related requests
 * @param args Arguments documented at [Stremio's SDK Reference](https://github.com/Stremio/stremio-addon-sdk/blob/master/docs/api/requests/defineCatalogHandler.md)
 * @returns A list of movies' metadata
 */
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

/**
 * Addon's controller for stream-related requests
 * @param args Arguments documented at [Stremio's SDK Reference](https://github.com/Stremio/stremio-addon-sdk/blob/master/docs/api/requests/defineStreamHandler.md)
 * @returns A list of streams of movie and series.
 */
export async function createStreamHandler(args: Args) : Promise<{ streams: IStream[] }> {
    let streamDao = new StreamDAO();
    let result: { streams: IStream[] } = { streams: [] };
    try {
        result = { streams: await streamDao.getByStreamId(args.id) };
    } catch (error) {
        console.error(`Stream Handler ERROR: ${error}`);
    }
    return result;
}