import { supabase } from "../db/supabase.js"
import encrypt from "../lib/helper.js"

const RegisterController = async (req, res) => {
    const { name, email, phoneNumber, role, password } = req.body
    console.log({name, email, phoneNumber, role, password})
    
    const hashedPassword = await encrypt.generatedPassword(password);
    const { data, error } = await supabase.from('users').insert({
        name,
        email,
        phoneNumber,
        role,
        password: hashedPassword,
    }).select()
    if (error) {
        res.send(error)
    } else {
        res.send(data)
    }
}

export default RegisterController;