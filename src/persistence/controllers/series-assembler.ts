import { decode } from 'magnet-uri';
import { IMeta } from '../models/meta';
import { IStream } from '../models/stream';
import SeriesDTO, { SeriesMagnet } from '../models/transfer-objects/series';

function toStream(meta: IMeta, magnet: SeriesMagnet) {
    const { infoHash, sources } = decodeMagnet(magnet);
    
    return <IStream> {
        metaId: meta.id,
        fileIdx: magnet.fileIdx,
        episode: magnet.episode,
        season: magnet.season,
        seeders: magnet.seeders,
        title: magnet.title,
        size: magnet.size,
        type: 'series',
        infoHash,
        sources
    };
}

function decodeMagnet(magnet: SeriesMagnet) {
    const decodedMagnet = decode(magnet.magnet);
    if (!decodedMagnet.infoHash) {
        throw new Error("Magnet does not contain a valid infohash");
    }
    const infoHash = decodedMagnet.infoHash.toLowerCase(), sources = decodedMagnet.announce;
    return { infoHash, sources };
}

function toStreamCollection(series: SeriesDTO): IStream[] {
    return series.magnets.map((m)=>toStream(series.meta,m));
}
/**
 * Data mapper function that transform a received SeriesDTO into an object with a meta and many streams
 * @param series Data Transfer Object for series content
 * @returns the series' metadata and streams
 */
export default function disassemble(series: SeriesDTO) {
    return {
        meta: series.meta,
        streams: toStreamCollection(series),
    };
}