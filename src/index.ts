import express from 'express';
import http from 'http';
import mongoose from 'mongoose';
import { config } from './config/config';
import productRoutes from './routes/Product'

const app = express();
app.use(express.json());

//Connect to MongoDB
mongoose
    .connect(config.mongo.string, { retryWrites: true, w: 'majority' })
    .then(() => {
        console.log('Connected to MongoDB')
    })
    .catch((error) => {
        console.log(error)
    });

//API rules
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, DELETE, GET');
        return res.status(200).json({});
    }

    next();
});

//Routes
app.use('/api/products', productRoutes);

//Error
app.use((req, res, next) => {
    const error = new Error('not found');
    return res.status(404).json({
        message: error.message
    });
});

//Create server
http.createServer(app).listen(config.server.port, () =>
    console.log('Listening on port ' + config.server.port)
);