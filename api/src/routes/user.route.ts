import  express  from "express";
import { signup, login, logout, getAllUsers, deleteUser, updataUser, updateUserRole} from "../controllers/user.controller";
import { authorizedAdmin,  authenticate } from "../middlewares/auth.middleware";



const router = express.Router();
// const parser = multer({ storage: profileStorage });

router.post("/", signup);
router.post("/login", login);
router.post("/logout", logout);
router.put("/:id", authenticate, updataUser);

// admin only
router.get("/",authenticate, authorizedAdmin, getAllUsers);
router.put("/:id", authenticate, authorizedAdmin,updateUserRole);
router.delete("/:id", authenticate, authorizedAdmin, deleteUser);

export default router;