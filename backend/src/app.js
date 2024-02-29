import express from "express"
import cors from  "cors"
import cookieParser from "cookie-parser"
import authMiddleware from "./middleware/auth.js"

const app = express()

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(cookieParser());



//importing routes
import userRouter from './routes/user.routes.js'
import patientRouter from './routes/patient.route.js'
import doctorRouter from './routes/doctor.route.js'
import appointmentRouter from './routes/appointment.route.js'




//routes declaration
app.use("/api/v1/users", userRouter)
app.use("/api/v1/patient", authMiddleware, patientRouter)
app.use("/api/v1/doctor", authMiddleware, doctorRouter)
app.use("/api/v1/appointment", appointmentRouter)



export { app }