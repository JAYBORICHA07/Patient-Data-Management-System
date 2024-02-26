import { supabase } from "../db/supabase.js"

const RegisterController = async (req, res) => {
    const { name, email, phoneNumber, role, password } = req.body
    console.log({name, email, phoneNumber, role, password})

    const { data, error } = await supabase.from('users').insert({
        name,
        email,
        phoneNumber,
        role,
        password
    }).select()
    if (error) {
        res.send(error)
    } else {
        res.send(data)
    }
}

export default RegisterController;