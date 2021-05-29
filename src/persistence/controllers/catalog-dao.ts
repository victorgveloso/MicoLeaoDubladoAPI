import Catalog, { ICatalog } from '../models/catalog';

/**
 * This class abstracts database operations related to the Catalog model
 */
export default class CatalogDAO {
    async getAll(): Promise<ICatalog[]>{
        return Catalog.find().exec();
    }
    async getById(id: any): Promise<ICatalog[]>{
        return Catalog.find({ id }).exec();
    }
    async add(catalog: ICatalog): Promise<ICatalog>{
        return (new Catalog(catalog)).save();
    }
}