import express from 'express';
import controller from '../controllers/Product';

const router = express.Router();

router.post('/create', controller.postProduct);
router.get('/get/:productId', controller.getProduct);
router.get('/get/', controller.getAllProducts);
router.put('/update/:productId', controller.updateProduct);
router.delete('/delete/:productId', controller.deleteProduct);

export = router;