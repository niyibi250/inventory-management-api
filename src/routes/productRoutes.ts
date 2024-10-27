import { Router } from 'express';
import { addProduct, updateProductQuantity, deleteProduct, getProducts, getProductById } from '../controllers/productController';

const ProductRouter = Router();

ProductRouter.route('/')
     .post(addProduct)
     .get(getProducts)

ProductRouter.route('/:id')
     .delete(deleteProduct)
     .get(getProductById)
     
ProductRouter.route('/:id/quantity')
     .put(updateProductQuantity)

export default ProductRouter;
