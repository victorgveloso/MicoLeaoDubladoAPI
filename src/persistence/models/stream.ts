import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IStream extends Document {
    metaId: string
    type: string
    title: string
    infoHash: string
    sources: string[]
    fileIdx?: number
    episode?: number
    season?: number
}

export const StreamSchema: Schema = new Schema({
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
    fileIdx: {
        type: 'Number',
        required: false
    },
    episode: {
        type: 'Number',
        required: false
    },
    season: {
        type: 'Number',
        required: false
    }
});

StreamSchema.virtual("streamId").get(function (this: IStream) {
    if (this.type === "series") {
        return `${this.metaId}:${this.episode}:${this.season}`
    }
    return this.metaId;
})

const Stream: Model<IStream> = mongoose.model<IStream>('Stream', StreamSchema);

export default Stream;