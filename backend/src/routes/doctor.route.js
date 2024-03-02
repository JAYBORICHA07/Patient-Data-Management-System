import { Router } from "express";
import { DoctorprofileController , DoctorprofileUpdateController, GetAllDoctor, getOneDoctorProfile } from "../controllers/DoctorprofileController.js";


const router = Router();

router.route("/profile").post(DoctorprofileController)
router.route("/profile/update").post(DoctorprofileUpdateController)
router.route("/profile/getone").post(getOneDoctorProfile)
router.route("/getall").post(GetAllDoctor)

export default router