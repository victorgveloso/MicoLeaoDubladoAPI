import MetaDAO from './persistence/controllers/meta-dao';
import StreamDAO from './persistence/controllers/stream-dao';

export function createCatalogHandler(args: any) {
    let metaDao = new MetaDAO()
    const skip = parseInt(args.extra.skip) || 0
    const limit = 100
    if (args.extra.search) {
        return metaDao.getByName(args.extra.search, skip, limit).then((metas) => {
            return {
                metas
            }
        }).catch((error) => {
            throw new Error(`Catalog Handler ERROR: ${error}`)
        })
    } else if (args.type == 'movie') {
        if (args.extra.genre) {
            return metaDao.getByGenre(args.id, args.extra.genre, skip, limit).then((metas) => {
                return {
                    metas
                }
            }).catch((error) => {
                throw new Error(`Catalog Handler ERROR: ${error}`)
            })
        }
        return metaDao.getByCatalogId(args.id, skip, limit).then((metas) => {
            return {
                metas
            }
        }).catch((error) => {
            throw new Error(`Catalog Handler ERROR: ${error}`)
        })
    }
}

export function createStreamHandler(args: any) {
    let streamDao = new StreamDAO();
    return streamDao.getByMetaId(args.id).then((streams) => {
        return {
            streams
        };
    }).catch((error) => {
        console.error(`Stream Handler ERROR: ${error}`);
        return {
            streams: []
        };
    });
}