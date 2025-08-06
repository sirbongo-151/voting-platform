import express from 'express';
const router = express.Router();


import { createCategory, getCategories } from '../controllers/category.controller';


router.post('/', createCategory);
router.get('/', getCategories);

export default router;
