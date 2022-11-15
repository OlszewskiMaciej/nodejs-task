import { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import Product from '../models/Product';

const postProduct = (req: Request, res: Response, next: NextFunction) => {
    const { name, price } = req.body;

    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name,
        price
    });

    return product
        .save()
        .then((product) => res.status(201).json({ product }))
        .catch((error) => res.status(500).json({ error }));
}

const getProduct = (req: Request, res: Response, next: NextFunction) => {
    const productId = req.params.productId;

    return Product.findById(productId)
        .then((product) => (
            product
                ? res.status(200).json({
                    product
                })
                : res.status(404).json({
                    message: 'Not found'
                })))
        .catch((error) => res.status(500).json({ error }));
}

const getAllProducts = (req: Request, res: Response, next: NextFunction) => {
    return Product.find()
        .then((products) => res.status(200).json({ products }))
        .catch((error) => res.status(500).json({ error }));
}

const updateProduct = (req: Request, res: Response, next: NextFunction) => {
    const productId = req.params.productId;

    return Product.findById(productId)
        .then((product) => {
            if (product) {
                product.set(req.body);

                return product
                    .save()
                    .then((product) => res.status(201).json({ product }))
                    .catch((error) => res.status(500).json({ error }));
            }
            else {
                res.status(404).json({ message: 'Not found' })
            }
        })
        .catch((error) => res.status(500).json({ error }));
}

const deleteProduct = (req: Request, res: Response, next: NextFunction) => {
    const productId = req.params.productId;

    return Product.findByIdAndDelete(productId)
        .then((product) => (
            product
                ? res.status(201).json({
                    message: 'Deleted'
                })
                : res.status(404).json({
                    message: 'Not found'
                })))
        .catch((error) => res.status(500).json({ error }));
}

export default { postProduct, getProduct, getAllProducts, updateProduct, deleteProduct };