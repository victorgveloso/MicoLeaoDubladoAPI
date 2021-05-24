import { decode } from 'magnet-uri';
import { IMagnet, IMovie } from '../models/movie';

function toStreamData(movie: IMovie) {
    return movie.magnets.map((m: IMagnet) => {

        const decodedMagnet = decode(m.magnet);
        if(!decodedMagnet.infoHash) {
            throw new Error("Magnet does not contain a valid infohash");
        }
        const infoHash = decodedMagnet.infoHash.toLowerCase();
        const sources = decodedMagnet.announce;

        return {
            metaId: movie.meta.id,
            title: m.title,
            type: 'movie',
            infoHash,
            sources
        };
    });
}

export default function disassemble (movie: IMovie) {
    return {
        meta: movie.meta,
        streams: toStreamData(movie),
    };
}