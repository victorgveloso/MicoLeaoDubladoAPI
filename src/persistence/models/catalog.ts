import { Schema, model, Model } from 'mongoose';
import { ContentType } from './stremio';
/**
 * Catalog is a collection of multimedia of the same type (movie or series)
 */
export interface ICatalog {
    id: string
    type: ContentType
    name: string
    genres: string[]
    extraSupported: string[]
}

export const CatalogSchema: Schema = new Schema({
    id: {
        type: 'String',
        required: true
    },
    type: {
        type: 'String',
        required: true,
    },
    name: {
        type: 'String',
        required: true,
    },
    genres: {
        type: ['String'],
        required: false
    },
    extraSupported: {
        type: ['String'],
        required: false
    }
});
const Catalog: Model<ICatalog> = model<ICatalog>('Catalog', CatalogSchema);

export default Catalog;