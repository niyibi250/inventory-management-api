import mongoose, { Document, Schema } from 'mongoose';

export interface IProduct {
  ID: string; 
  name: string;
  quantity: number;
  category: string;
}

export interface IProductDocument extends IProduct, Document {}

const productSchema = new Schema<IProductDocument>({
  ID: { type: String, required: true, unique: true }, 
  name: { type: String, required: true, unique: true },
  quantity: { type: Number, required: true, min: 0 },
  category: { type: String, required: true },
}, { timestamps: true });

const Product = mongoose.model<IProductDocument>('Product', productSchema);

export default Product;
