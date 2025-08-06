import express, { Response, NextFunction } from 'express';
import { CatalogService } from '../service/Catalog.service';
import { CatalogRepository } from '../repository/Catalog.repository';
import { RequestValidator } from '../utils/requestValidator';
import { CreateProductRequest } from '../dto/product.dto';

const router = express.Router();
const service = new CatalogService(new CatalogRepository);

// Route to create a new product
router.post('/products', async (req, res: Response, next: NextFunction) => {

    try {
        const { errors, input } = await RequestValidator(
            CreateProductRequest,
            req.body
        );

        if (errors) {
            return res.status(400).json({ errors });
        }

        const data = service.createProduct(input);
        return res.status(201).json(data);
    } catch (error) {
        const errorMessage = error as Error;
        return res.status(500).json(errorMessage.message)
    }
});


// Route to update an existing product
router.patch('/products/:id', async (req, res: Response, next: NextFunction) => {

    try {

        const product = await service.getProduct(Number(req.params.id));
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        const { errors, input } = await RequestValidator(
            CreateProductRequest,
            req.body
        );

        if (errors) {
            return res.status(400).json({ errors });
        }

        const data = service.updateProduct(input);
        return res.status(201).json(data);
    } catch (error) {
        const errorMessage = error as Error;
        return res.status(500).json(errorMessage.message)
    }
});
export default router;