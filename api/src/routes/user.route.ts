import  express  from "express";
import { signup, login } from "../controllers/user.controller";

const router = express.Router();

router.post("/", signup);
router.post("/login", login);

export default router;