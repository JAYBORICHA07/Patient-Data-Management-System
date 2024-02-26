import { Router } from "express";
import RegisterController from "../controllers/RegisterController.js"
import LoginController from "../controllers/LoginController.js"


const router = Router();

router.route("/register").post(RegisterController)
router.route("/login").post(LoginController)
router.route("/delete").post(LoginController)

export default router