import { Product } from "../models/Product.model";

export interface ICatalogRepository {
    create(data: Product): Promise<Product>;
    findById(id: string): Promise<Product>;
    findAll(): Promise<Product[]>;
    update(id: string, data: Product): Promise<Product>;
    delete(id: string): Promise<void>;
}