import mongoose, { Schema, Model } from 'mongoose';
import { IStream } from './stream';

export interface ISeriesStream extends IStream {
    metaId: string
    type: string
    title: string
    infoHash: string
    sources: string[]
    episode: number
    season: number
}

export const SeriesStreamSchema: Schema = new Schema({
    metaId: {
        type: 'String',
        required: true
    },
    type: {
        type: 'String',
        required: false
    },
    title: {
        type: 'String',
        required: false
    },
    infoHash: {
        type: 'String',
        required: true
    },
    sources: {
        type: ['String'],
        required: false
    },
    episode: {
        type: 'Number',
        required: true
    },
    season: {
        type: 'Number',
        required: true
    }
});

SeriesStreamSchema.virtual("streamId").get(function (this: ISeriesStream) {
    return `${this.metaId}:${this.episode}:${this.season}`
})

const SeriesStream: Model<ISeriesStream> = mongoose.model<ISeriesStream>('SeriesStream', SeriesStreamSchema);
export default SeriesStream;