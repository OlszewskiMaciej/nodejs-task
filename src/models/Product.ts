import mongoose from 'mongoose';

export interface IProduct {
    name: string,
    price: number;
}

export interface IProductModel extends IProduct, Document { }

const ProductSchema: mongoose.Schema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            maxlength: 100
        },
        price: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
        versionKey: false
    },

);

export default mongoose.model<IProductModel>('Product', ProductSchema)