import { Schema, model, Model, Document } from 'mongoose';
import { CatalogSchema, ICatalog } from "./catalog";
import { ContentType, ShortManifestResource } from './stremio';
/**
 * Manifest describes the Stremio's Addon general informations.
 */
export interface IManifest extends Document {
    id: string
    name: string
    version: string
    description: string
    resources: ShortManifestResource[]
    types: ContentType[]
    catalogs: ICatalog[]
    idPrefixes: string[]
}

export const ManifestSchema: Schema = new Schema({
    id: {
        type: 'String',
        required: true,
    },
    name: {
        type: 'String',
        required: true,
    },
    version: {
        type: 'String',
        required: true,
    },
    description: {
        type: 'String',
        required: true,
    },
    resources: {
        type: ['String'],
        required: true,
    },
    types: {
        type: ['String'],
        required: true,
    },
    catalogs: {
        type: [CatalogSchema],
        ref: 'Catalog',
        required: true,
    },
    idPrefixes: {
        type: ['String'],
        required: true,
    },
});

const Manifest: Model<IManifest> = model<IManifest>('Manifest', ManifestSchema);

export default Manifest;