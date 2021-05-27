import mongoose, { Schema, Document, Model } from 'mongoose';
/* TODO: StreamId class and streamId virtual function should be deprecated and 
streamId should be added as a property to StreamSchema */
export class StreamId {
    static toObject(streamId: string) {
        const fields: string[] = streamId.split(':');
        const metaId = fields[0];
        const season = parseInt(fields[1]);
        const episode = parseInt(fields[2]);
        return {metaId, season, episode};
    }
    static fromObject(obj: {metaId: string, season: number, episode: number}) {
        return `${obj.metaId}:${obj.episode}:${obj.season}`;
    }
}

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
        return StreamId.fromObject(this as any);
    }
    return this.metaId;
})

const Stream: Model<IStream> = mongoose.model<IStream>('Stream', StreamSchema);

export default Stream;