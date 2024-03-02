import { Router } from "express";
import generateDescription from "../controllers/openaiController.js";


const router = Router();

router.route("/chat").post(generateDescription)

export default router;