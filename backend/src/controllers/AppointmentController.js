import { supabase } from "../db/supabase.js"
const AppointmentController = {}

AppointmentController.insert = async (req, res) => {
    const { patientName, patientId, doctorName, doctorId, bookingDate, appointmentDate, appointmentTime, status  } = req.body
    console.log({patientName, patientId, doctorName, doctorId, bookingDate, appointmentDate, appointmentTime, status})

    const { data, error } = await supabase.from('appointments').insert({
        patientName, 
        patientId, 
        doctorName, 
        doctorId, 
        bookingDate, 
        appointmentDate, 
        appointmentTime, 
        status
    }).select()
    if (error) {
        res.send(error)
    } else {
        res.send(data)
    }
}
AppointmentController.get = async (req, res) => {
    const { patientName, patientId, doctorName, doctorId, bookingDate, appointmentDate, appointmentTime, status  } = req.body
    console.log({patientName, patientId, doctorName, doctorId, bookingDate, appointmentDate, appointmentTime, status})

    const { data, error } = await supabase.from('appointments').select('*')
    if (error) {
        res.send(error)
    } else {
        res.send(data)
    }
}
AppointmentController.update = async (req, res) => {
    const {id, patientName, patientId, doctorName, doctorId, bookingDate, appointmentDate, appointmentTime, status  } = req.body
    console.log({patientName, patientId, doctorName, doctorId, bookingDate, appointmentDate, appointmentTime, status})

    const { data, error } = await supabase.from('appointments').update({
        patientName, 
        patientId, 
        doctorName, 
        doctorId, 
        bookingDate, 
        appointmentDate, 
        appointmentTime, 
        status
    }).eq('id', id)
      .select()
    if (error) {
        res.send(error)
    } else {
        res.send(data)
    }
}
AppointmentController.delete = async (req, res) => {
    const {id, patientName, patientId, doctorName, doctorId, bookingDate, appointmentDate, appointmentTime, status  } = req.body
    console.log({patientName, patientId, doctorName, doctorId, bookingDate, appointmentDate, appointmentTime, status})

    const { data, error } = await supabase.from('appointments').delete({
        patientName, 
        patientId, 
        doctorName, 
        doctorId, 
        bookingDate, 
        appointmentDate, 
        appointmentTime, 
        status
    }).eq('id', id)
      .select()
    if (error) {
        res.send(error)
    } else {
        res.send(data)
    }
}
export default AppointmentController;