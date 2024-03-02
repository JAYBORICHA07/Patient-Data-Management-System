import { supabase } from "../db/supabase.js"

const PatientprofileController = async (req, res) => {
    const { patientId, email, name, dob, bloodGroup, phoneNumber, address, city, state, pincode, country, alergies } = req.body
    console.log({ email, name, dob, bloodGroup, phoneNumber, address, city, state, pincode, country, alergies })
    const { data, error } = await supabase.from('patients').insert({ 
        patientId,
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

const getOnePatientProfile = async ( req , res ) => {
    const { patientId } = req.body
    console.log(patientId)
    const { data, error } = await supabase.from('patients').select('*').eq("patientId", patientId);
    if(error){
        console.log(error)
        res.status(404).send(error)
    }else{
        console.log(data)
        res.send(data[0])
    }

}

export { PatientprofileController , PatientprofileUpdateController , getOnePatientProfile };