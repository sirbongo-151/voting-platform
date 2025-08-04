import  express  from "express";
import { signup, login, logout, getAllUsers, deleteUser, updataUser, uploadProfilePicture } from "../controllers/user.controller";
import multer from "multer";
import { profileStorage } from "../lib/cloudinaryStorage";

const router = express.Router();
const parser = multer({ storage: profileStorage });

router.post("/", signup);
router.post("/login", login);
router.post("/logout", logout);
router.post("/upload", parser.single('image'), uploadProfilePicture);
router.put("/:id", updataUser);

// admin only
router.get("/", getAllUsers);
router.delete("/:id", deleteUser);

export default router;