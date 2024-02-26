import { Router } from "express";
import DoctorprofileController from "../controllers/DoctorprofileController.js";


const router = Router();

router.route("/profile").post(DoctorprofileController)

export default router