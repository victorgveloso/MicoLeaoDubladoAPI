import { decode } from 'magnet-uri';
import { IStream } from '../models/stream';
import MovieDTO, { MovieMagnet } from '../models/transfer-objects/movie';

function toStreamData(movie: MovieDTO): IStream[] {
    return movie.magnets.map((m: MovieMagnet) => {

        const decodedMagnet = decode(m.magnet);
        if(!decodedMagnet.infoHash) {
            throw new Error("Magnet does not contain a valid infohash");
        }
        const infoHash = decodedMagnet.infoHash.toLowerCase();
        const sources = decodedMagnet.announce;

        return <IStream> {
            metaId: movie.meta.id,
            streamId: movie.meta.id,
            seeders: m.seeders,
            title: m.title,
            type: 'movie',
            infoHash,
            sources
        };
    });
}

export default function disassemble (movie: MovieDTO) {
    return {
        meta: movie.meta,
        streams: toStreamData(movie),
    };
}