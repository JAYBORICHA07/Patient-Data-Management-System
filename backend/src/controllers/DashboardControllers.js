import { supabase } from "../db/supabase.js"

export const DoctorDashboardController = async (req, res) => {

    const { doctorId } = req.body
    const { data, error } = await supabase.from('appointments').select('*').eq("doctorId", doctorId)
    if (error) {
        res.send(error)
    } else {
        res.send(data)
    }
}

export const PatientDashboardController = (async (req, res) => {

    const { patientId } = req.body

    const { data, error } = await supabase.from('appointments').select('*').eq("patientId", patientId)
    if (error) {
        res.send(error)
    } else {
        res.send(data)
    }
})