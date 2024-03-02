import { Router } from "express";
import { DoctorDashboardController , PatientDashboardController } from "../controllers/DashboardControllers.js";


const router = Router();

router.route("/doctor").post(DoctorDashboardController)
router.route("/patient").post(PatientDashboardController)

export default router