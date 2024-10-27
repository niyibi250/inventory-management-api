import { v4 as uuidv4 } from 'uuid';
import { Request, Response } from 'express';
import Product, { IProductDocument } from '../models/Product';
import EventLog from '../models/EventLog';

const logEvent = async (action: string, productId: string) => {
  await EventLog.create({ action, productId });
};

export const addProduct = async (req: Request, res: Response) :Promise<Response>=> {
  try {
    const { name, quantity, category } = req.body;
    const ID = uuidv4()
    const existingProduct = await Product.findOne({ name });
    if (existingProduct) {
      return res.status(400).json({ error: 'Product name must be unique.' });
    }

    const product: IProductDocument = await Product.create({ ID, name, quantity, category });
    await logEvent('added', product.ID); 
    return res.status(201).json(product);
  } catch (error) {
    console.error('Error adding product:', error);
    return res.status(500).json({ error: 'Failed to add product' });
  }
};

export const updateProductQuantity = async (req: Request, res: Response):Promise<Response> => {
  try {
    const { ID } = req.params; 
    const { quantity } = req.body;

    if (quantity < 0) {
      return res.status(400).json({ error: 'Quantity must be greater than or equal to 0.' });
    }

    const product = await Product.findOneAndUpdate({ ID }, { quantity }, { new: true });
    if (!product) {
      return res.status(404).json({ error: 'Product not found.' });
    }

    await logEvent('updated quantity', product.ID); 
    return res.status(200).json(product);
  } catch (error) {
    console.error('Error updating product quantity:', error);
    return res.status(500).json({ error: 'Failed to update product quantity' });
  }
};

export const deleteProduct = async (req: Request, res: Response):Promise<Response> => {
  try {
    const { ID } = req.params; 

    const product = await Product.findOne({ ID });
    if (!product) {
      return res.status(404).json({ error: 'Product not found.' });
    }

    if (product.quantity > 0) {
      return res.status(400).json({ error: 'Cannot delete a product with non-zero quantity.' });
    }

    await Product.findOneAndDelete({ ID }); 
    await logEvent('deleted', ID); 
    return res.status(200).json({ message: 'Product deleted successfully.' });
  } catch (error) {
    console.error('Error deleting product:', error);
    return res.status(500).json({ error: 'Failed to delete product' });
  }
};

export const getProducts = async (req: Request, res: Response):Promise<Response> => {
  try {
    const { category, minQuantity, maxQuantity, limit = 10, page = 1 } = req.query;
    const query: any = {};

    if (category) query.category = category;
    if (minQuantity) query.quantity = { ...query.quantity, $gte: Number(minQuantity) };
    if (maxQuantity) query.quantity = { ...query.quantity, $lte: Number(maxQuantity) };

    const products = await Product.find(query)
      .limit(Number(limit))
      .skip((Number(page) - 1) * Number(limit));

    return res.status(200).json(products);
  } catch (error) {
    console.error('Error retrieving products:', error);
    return res.status(500).json({ error: 'Failed to retrieve products' });
  }
};

export const getProductById = async (req: Request, res: Response) :Promise<Response>=> {
  try {
    const { ID } = req.params; 
    const product = await Product.findOne({ ID });

    if (!product) {
      return res.status(404).json({ error: 'Product not found.' });
    }

    return res.status(200).json(product);
  } catch (error) {
    console.error('Error retrieving product:', error);
    return res.status(500).json({ error: 'Failed to retrieve product' });
  }
};
