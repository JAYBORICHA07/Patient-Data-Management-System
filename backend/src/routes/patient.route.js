import { Router } from "express";
import {PatientprofileController, PatientprofileUpdateController} from "../controllers/PatientprofileController.js";


const router = Router();

router.route("/profile").post(PatientprofileController)
router.route("/profile/update").post(PatientprofileUpdateController)


export default router