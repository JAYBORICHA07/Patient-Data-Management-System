import { Router } from "express";
import PatientprofileController from "../controllers/PatientprofileController.js";


const router = Router();

router.route("/profile").post(PatientprofileController)

export default router