import express from 'express';
import { createCandidate, getCandidatesByCategory } from '../controllers/candidate.controller';
import fileParser from '../middlewares/fileParser';
import { authenticate, authorizedAdmin } from '../middlewares/auth.middleware';



const router = express.Router();
 

router.post('/',authenticate,authorizedAdmin, fileParser, createCandidate)
router.get('/category/:categoryId', getCandidatesByCategory);

export default router;
