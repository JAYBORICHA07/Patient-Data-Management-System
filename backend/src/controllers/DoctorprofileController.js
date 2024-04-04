import { supabase } from "../db/supabase.js"

const DoctorprofileController = async (req, res) => {
    const { doctorId ,email, name, phoneNumber, qualification, specialization, clinicName, clinicAddress, clinicCity, clinicState, fees, services, doctorRegistrationNumber, doctorRegistrationYear } = req.body
    console.log({ email, name, phoneNumber, qualification, specialization, clinicName, clinicAddress, clinicCity, clinicState, fees, services, doctorRegistrationNumber, doctorRegistrationYear })
    const { data, error } = await supabase.from('doctors').insert({
        doctorId,
        email,
        name,
        phoneNumber,
        qualification,
        specialization,
        clinicName,
        clinicAddress,
        clinicCity,
        clinicState,
        fees,
        services,
        doctorRegistrationNumber,
        doctorRegistrationYear
    }).select()
    if (error) {
        res.send(error)
    } else {
        res.send(data)
    }
}

const DoctorprofileUpdateController = async (req, res) => {
    const { doctorId ,email, name, phoneNumber, qualification, specialization, clinicName, clinicAddress, clinicCity, clinicState, fees, services, doctorRegistrationNumber, doctorRegistrationYear } = req.body
    console.log({doctorId, email, name, phoneNumber, qualification, specialization, clinicName, clinicAddress, clinicCity, clinicState, fees, services, doctorRegistrationNumber, doctorRegistrationYear })
    const { data, error } = await supabase.from('doctors').update({
        doctorId,
        email,
        name,
        phoneNumber,
        qualification,
        specialization,
        clinicName,
        clinicAddress,
        clinicCity,
        clinicState,
        fees,
        services,
        doctorRegistrationNumber,
        doctorRegistrationYear
    }).eq('doctorId',doctorId).select()
    if (error) {
        res.send(error)
    } else {
        res.send(data)
    }
}

const getOneDoctorProfile = async ( req , res ) => {
    const { doctorId } = req.body
    console.log(doctorId)
    const { data, error } = await supabase.from('doctors').select('*').eq("doctorId", doctorId);
    if(error){
        console.log(error)
        res.status(404).send(error)
    }else{
        // console.log(data)
        res.send(data[0])
    }

}

const GetAllDoctor = async (req, res) => {
    const { data, error } = await supabase.from('doctors').select('*');
    if(error){
        console.log(error)
        res.status(404).send(error)
    }else{
        console.log(data)
        res.send(data)
    }
}

export { DoctorprofileController , DoctorprofileUpdateController, getOneDoctorProfile, GetAllDoctor };