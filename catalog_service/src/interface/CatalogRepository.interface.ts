export interface ICatalogRepository {
    create(data: any): Promise<{}>;
    findById(id: any): Promise<{}>;
    findAll(): Promise<any[]>;
    update(id: any, data: any): Promise<{}>;
    delete(id: any): Promise<{}>;
}