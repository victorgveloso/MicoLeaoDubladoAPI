import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IStream extends Document {
    metaId: string
    type: string
    title: string
    infoHash: string
    sources: string[]
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
    }
});

const Stream: Model<IStream> = mongoose.model<IStream>('Stream', StreamSchema);

export default Stream;