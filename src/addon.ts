import MetaDAO from './persistence/controllers/meta-dao';
import StreamDAO from './persistence/controllers/stream-dao';
import { IMeta } from './persistence/models/meta';
import { IStream } from './persistence/models/stream';
import { Args } from './persistence/models/stremio';

export function createCatalogHandler(args: Args): {metas: IMeta[]} {
    let metaDao = new MetaDAO();
    const skip = args.extra.skip || 0;
    const limit = 100;
    let result: {metas: IMeta[]} = {metas: []};
    if (args.extra.search) {
        metaDao.getByName(args.extra.search, skip, limit).then((metas) => {
            result = {
                metas
            };
        }).catch((error) => {
            throw new Error(`Catalog Handler ERROR: ${error}`);
        });
    } else if (args.type == 'movie') {
        if (args.extra.genre) {
            metaDao.getByGenre(args.id, args.extra.genre, skip, limit).then((metas) => {
                result = {
                    metas
                };
            }).catch((error) => {
                throw new Error(`Catalog Handler ERROR: ${error}`);
            });
        }
        else {
            metaDao.getByCatalogId(args.id, skip, limit).then((metas) => {
                result = {
                    metas
                };
            }).catch((error) => {
                throw new Error(`Catalog Handler ERROR: ${error}`);
            });
        }
    }
    return result;
}

export function createStreamHandler(args: Args) {
    let streamDao = new StreamDAO();
    let result : {streams: IStream[]} = {streams: []};
    streamDao.getByMetaId(args.id).then((streams) => {
        result = {
            streams
        };
    }).catch((error) => {
        console.error(`Stream Handler ERROR: ${error}`);
        result = {
            streams: []
        };
    });
    return result;
}