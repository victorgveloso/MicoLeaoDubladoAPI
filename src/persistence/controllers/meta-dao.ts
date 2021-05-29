import Meta, { IMeta } from '../models/meta';
/**
 * This class abstracts database operations related to the Meta model
 */
export default class MetaDAO {
    async getAll(skip=0, limit=100) {
        return Meta.find().skip(skip).limit(limit).exec();
    }
    async getByGenre(catalogId: string, genre: string, skip=0, limit=100) {
        return Meta.find({ catalogs: catalogId, genres: genre }).skip(skip).limit(limit).exec();
    }
    async getByCatalogId(catalogId: string, skip=0, limit=100) {
        return Meta.find({ catalogs: catalogId }).skip(skip).limit(limit).exec();
    }
    async getByName(name: string, skip=0, limit=100) {
        return Meta.find({ name: { $regex: name, $options: 'i' } }).skip(skip).limit(limit).exec();
    }
    async getById(id: string) {
        return Meta.findOne({ id: id }).exec();
    }
    async add(meta: IMeta) {
        return (new Meta(meta)).save();
    }
    async addIfAbsent(meta: IMeta) {
        let exists = await this.getById(meta.id);
        if (exists != null) {
            return exists;
        }
        else {
            return this.add(meta);
        }
    }
    async update(meta: IMeta) {
        return Meta.update({ id: meta.id }, meta).exec();
    }
    async upsert(meta: IMeta) {
        let exists = await this.getById(meta.id);
        if (exists != null) {
            return this.update(meta);
        }
        else {
            return this.add(meta);
        }
    }
}