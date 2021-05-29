import mongoose, { Schema, Document, Model } from 'mongoose';
/**
 * Stream describes a multimedia content and how to download/play it.
 * A multimedia title may contains multiple streams associated with it.
 */
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
    size?: number
}
/**
 * Extract and merge informations from a stream to create its streamId (defined at Stremio Addon SDK documentation)
 * @param stream a stream of any type (movie or series)
 * @returns the proper streamId
 */
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
    },
    size: {
        type: 'Number',
        required: false
    }
});

StreamSchema.static("generateStreamId", generateStreamId);

const Stream: Model<IStream> = mongoose.model<IStream>('Stream', StreamSchema);

export default Stream;