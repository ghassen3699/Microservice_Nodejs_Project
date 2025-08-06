import { error } from "console";
import { ICatalogRepository } from "../interface/CatalogRepository.interface";

export class CatalogService {

    private _repository: ICatalogRepository

    constructor(private catalogRepository: ICatalogRepository) {
        this._repository = catalogRepository
    }

    async createProduct(input: any) {
        const data = await this._repository.create(input);
        if (!data.id) {
            throw new error('Unable to create product');
        }
        return data;
    }

    async updateProduct(input: any) {
        const data = await this._repository.update(input);
        return data;
    }

    async getProducts(limit: number, offset: number) {
        const data = await this._repository.findAll(limit, offset);
        return data;
    }

    async getProduct(id: number) {
        const data = await this._repository.findById(id);

        return data;
    }

    async deleteProduct(id: number) {
        const response = await this._repository.delete(id);
        return response;
    }
}