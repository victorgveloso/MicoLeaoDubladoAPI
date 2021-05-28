import mongoose, { Schema, Document, Model } from 'mongoose';
/* TODO: Add size as attribute of IStream */
export interface IStream extends Document {
    metaId: string
    streamId: string
    type: string
    title: string
    infoHash: string
    sources: string[]
    seeders?: number
    fileIdx?: number
    episode?: number
    season?: number
}
function generateStreamId(stream: IStream): string {
    if (stream.type && stream.type === "series") {
        return `${stream.metaId}:${stream.season}:${stream.episode}`;
    }
    return stream.metaId;
}

export const StreamSchema: Schema = new Schema({
    metaId: {
        type: 'String',
        required: true
    },
    streamId: {
        type: 'String',
        default: function(this: IStream) {
            return generateStreamId(this);
        }
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
    },
    seeders: {
        type: 'Number',
        required: false
    }
});

StreamSchema.static("generateStreamId", generateStreamId);

const Stream: Model<IStream> = mongoose.model<IStream>('Stream', StreamSchema);

export default Stream;