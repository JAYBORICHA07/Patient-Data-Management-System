import { supabase } from "../db/supabase.js"

const PatientprofileController = async (req, res) => {
    const { email, name, dob, bloodGroup, phoneNumber, address, city, state, pincode, country, alergies } = req.body
    console.log({ email, name, dob, bloodGroup, phoneNumber, address, city, state, pincode, country, alergies })
    const { data, error } = await supabase.from('patients').insert({ 
        email, 
        name, 
        dob, 
        bloodGroup, 
        phoneNumber, 
        address, 
        city, 
        state, 
        pincode, 
        country, 
        alergies 
    }).select()
    if (error) {
        res.send(error)
    } else {
        res.send(data)
    }
}

const PatientprofileUpdateController = async (req, res) => {
    const { id ,email, name, dob, bloodGroup, phoneNumber, address, city, state, pincode, country, alergies } = req.body
    console.log({ email, name, dob, bloodGroup, phoneNumber, address, city, state, pincode, country, alergies })
    const { data, error } = await supabase.from('patients').update({ 
        email, 
        name, 
        dob, 
        bloodGroup, 
        phoneNumber, 
        address, 
        city, 
        state, 
        pincode, 
        country, 
        alergies 
    }).eq({id: id}).select()
    if (error) {
        res.send(error)
    } else {
        res.send(data)
    }

}

export { PatientprofileController, PatientprofileUpdateController};