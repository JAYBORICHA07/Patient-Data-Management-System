import { supabase } from "../db/supabase.js"

const DoctorprofileController = async (req, res) => {
    const { email, name, dob, bloodGroup, phoneNumber, address, city, state, pincode, country, alergies } = req.body
    console.log({ email, name, phoneNumber, qualification, specialization, clinicName, clinicAddress, clinicCity, clinicState, fees, services, doctorRegistrationNumber, doctorRegistrationYear })
    const { data, error } = await supabase.from('doctors').insert({
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
    const { id, email, name, dob, bloodGroup, phoneNumber, address, city, state, pincode, country, alergies } = req.body
    console.log({ id, email, name, phoneNumber, qualification, specialization, clinicName, clinicAddress, clinicCity, clinicState, fees, services, doctorRegistrationNumber, doctorRegistrationYear })
    const { data, error } = await supabase.from('doctors').update({
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
    }).eq({id: id}).select()
    if (error) {
        res.send(error)
    } else {
        res.send(data)
    }
}

export { DoctorprofileController , DoctorprofileUpdateController };