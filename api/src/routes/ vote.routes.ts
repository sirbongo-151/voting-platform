import express from 'express';
import { castVote } from "../controllers/vote.controller";
// import { authenticate } from '../middlewares/auth.middleware';
const router = express.Router();

router.post('/',  castVote);

export default router;
