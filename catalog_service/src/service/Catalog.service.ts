import { ICatalogRepository } from "../interface/CatalogRepository.interface";

export class CatalogService {

    private _repository: ICatalogRepository

    constructor(private catalogRepository: ICatalogRepository) {
        this._repository = catalogRepository
    }

    createProduct(input: any) {

    }

    updateProduct(input: any) {

    }

    getProducts(limit: number, offset: number) {

    }

    getProduct(id: number) {

    }

    deleteProduct(id: number) {

    }
}