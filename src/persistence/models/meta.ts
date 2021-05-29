import { Schema, model } from 'mongoose';
import { ContentType } from './stremio';
/**
 * Meta represents all metadata related to a multimedia title (movie or series).
 */
export interface IMeta {
    id: string
    type: ContentType
    name: string
    genres: string[]
    poster: string
    background: string
    logo: string
    description: string
    releaseInfo: string
    imdbRating: number
    runtime: string
    catalogs: string[]
}

export const MetaSchema: Schema = new Schema({
    id: {
        type: 'String',
        required: true
    },
    type: {
        type: 'String',
        required: true
    },
    name: {
        type: 'String',
        required: true
    },
    genres: {
        type: ['String'],
        required: false
    },
    poster: {
        type: 'String',
        required: false
    },
    background: {
        type: 'String',
        required: false
    },
    logo: {
        type: 'String',
        required: false
    },
    description: {
        type: 'String',
        required: false
    },
    releaseInfo: {
        type: 'String',
        required: false
    },
    imdbRating: {
        type: 'Number',
        required: false
    },
    runtime: {
        type: 'String',
        required: false
    },
    catalogs: {
        type: ['String'],
        required: true
    }
});

const Meta = model('Meta', MetaSchema);

export default Meta;