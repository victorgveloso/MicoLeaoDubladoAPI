import { decode } from 'magnet-uri';
import { IStream } from '../models/stream';
import SeriesDTO, { SeriesMagnet } from '../models/transfer-objects/series';

function toStream(series: SeriesDTO, magnet: SeriesMagnet) {
    const { infoHash, sources } = decodeMagnet(magnet);
    
    return <IStream> {
        metaId: series.meta.id,
        fileIdx: magnet.fileIdx,
        episode: magnet.episode,
        season: magnet.season,
        title: magnet.title,
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
    return series.magnets.map((m)=>toStream(series,m));
}

export default function disassemble(series: SeriesDTO) {
    return {
        meta: series.meta,
        streams: toStreamCollection(series),
    };
}