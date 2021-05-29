import Manifest, { IManifest } from '../models/manifest';

/**
 * This class abstracts database operations related to the Manifest model
 */
export default class ManifestDAO{
    async get(){
        let result: IManifest | null = await Manifest.findOne().exec();
        if (result === null) {
            result = await this.add(require('../models/stub/manifest.json'));
        }
        return result;
    }
    async add(manifest: IManifest): Promise<IManifest>{
        return (new Manifest(manifest)).save();
    }
}