import { Router } from "express";
import { supabase } from "../db/supabase.js"

const router = Router();

router.route("/register").post(async (req, res) => {
    const {name, email, phoneNumber, role, password} = req.body
    
    const {data, error} = await supabase.from('users').insert({
        name,
        email,
        phoneNumber,
        role,
        password
    }).select()
    if(error){
        res.send(error)
    }else{
        res.send(data)
    }
})

router.route("/login").post(async (req, res) => {
    const {email, password} = req.body

    const {data, error} = await supabase.from('users').select('*').eq('email',email).eq('password',password)
    if(error){
        res.send(error)
    }else{
        res.send(data)
    }
})
 


export default router