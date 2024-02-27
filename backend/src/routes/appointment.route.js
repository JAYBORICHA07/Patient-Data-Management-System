import { Router } from "express";
import AppointmentController from "../controllers/AppointmentController.js";


const router = Router();

router.route("/insert").post(AppointmentController.insert)
router.route("/get").post(AppointmentController.get)
router.route("/update").post(AppointmentController.update)
router.route("/delete").post(AppointmentController.delete)



export default router