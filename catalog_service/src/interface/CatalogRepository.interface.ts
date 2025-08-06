import { Product } from "../models/Product.model";

export interface ICatalogRepository {
    create(data: Product): Promise<Product>;
    update(data: Product): Promise<Product>;
    delete(id: number): Promise<void>;
    findAll(limit: number, offset: number): Promise<Product[]>;
    findById(id: number): Promise<Product>;
}