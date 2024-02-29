import { supabase } from "../db/supabase.js";
import jwt from "jsonwebtoken";
import encrypt from "../lib/helper.js";

const LoginController = async (req, res) => {
    try{
        const { email, password } = req.body;
        console.log({ email, password });

        const { data, error } = await supabase.from('users').select('*').eq("email", email);

        if (!data || data.length === 0) {
            return res.status(401).json({
                message: "Invalid credentials",
            });
        }
        const user = data[0];
        if(await encrypt.comparePassword(password, user.password))
        {
            const payload = {
                email: user.email,
                id: user.id,
            };

            let token = jwt.sign(payload, process.env.JWT_SECRET || "your_jwt_secret", { expiresIn: "2d" });
            delete user.password;
            return res.status(200).json({
                success: true,
                message: `login successfully`,
                token,
                user,
            });
        }
    } 
    catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Server error",
        });
    }
};

export default LoginController;