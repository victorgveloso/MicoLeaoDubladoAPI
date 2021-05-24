import { Schema, model, Model } from 'mongoose';
import { CatalogSchema, ICatalog } from "./catalog";

export interface IManifest {
    id: string
    name: string
    version: string
    description: string
    resources: string[]
    types: string[]
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