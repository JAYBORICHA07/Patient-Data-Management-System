import { Router } from "express";
import {PatientprofileController, PatientprofileUpdateController, getOnePatientProfile} from "../controllers/PatientprofileController.js";


const router = Router();

router.route("/profile").post(PatientprofileController)
router.route("/profile/getone").post(getOnePatientProfile)
router.route("/profile/update").post(PatientprofileUpdateController)


export default router