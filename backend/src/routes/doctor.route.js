import { Router } from "express";
import { DoctorprofileController , DoctorprofileUpdateController } from "../controllers/DoctorprofileController.js";


const router = Router();

router.route("/profile").post(DoctorprofileController)
router.route("/profile/update").post(DoctorprofileUpdateController)

export default router