import { Router } from "express";

const router = Router();

router.route("/register").post((req, res) => {
    res.json({
        messege : "working"
    })
})



export default router