import { supabase } from "../db/supabase.js"

const LoginController = async (req, res) => {
    const {email, password} = req.body
    console.log({email, password})
    const {data, error} = await supabase.from('users').select('*').eq('email',email).eq('password',password)
    if(error){
        res.send(error)
    }else{
        res.send(data)
    }
}

export default LoginController;