import express from 'express';
const router=express.Router();
import { getproducts, getproduct, createProduct, updateProduct, deleteProduct } from '../controllers/product.controller.js';



router.get('/',getproducts);
router.get('/:id',getproduct);
router.post('/',createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);





export default router;