import { decode } from 'magnet-uri';
import { IStream } from '../models/stream';
import SeriesDTO, { SeriesMagnet } from '../models/transfer-objects/series';

function toStreamData(movie: SeriesDTO): IStream[] {
    return movie.magnets.map((m: SeriesMagnet) => {

        const decodedMagnet = decode(m.magnet);
        if(!decodedMagnet.infoHash) {
            throw new Error("Magnet does not contain a valid infohash");
        }
        const infoHash = decodedMagnet.infoHash.toLowerCase();
        const sources = decodedMagnet.announce;

        return <IStream> {
            metaId: movie.meta.id,
            title: m.title,
            type: 'movie',
            infoHash,
            sources
        };
    });
}

export default function disassemble (movie: SeriesDTO) {
    return {
        meta: movie.meta,
        streams: toStreamData(movie),
    };
}