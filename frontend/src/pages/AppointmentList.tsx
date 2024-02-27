import { Button } from "@/components/ui/button"
import { useState } from "react"

function AppointmentList() {

    const[apppointments,Setappointments]= useState([])

    //after fecthing api we will use useState for get appointments
    useState(()=>{
        //getAppointments
    })

  return (
    <div className="flex justify-center">
        <table className=" border-2">
            <tr className="border px-2">
            <th>Sr.No</th>
            <th>DoctorName</th>
            <th>Appointment date</th>
            <th>bookingDate</th>
            <th>status</th>
            </tr>

            <tr>
                <td>1</td>
                <td>Dr ABC</td>
                <td>1/03/2024</td>
                <td>28/02/2024</td>
                <td>
                    <tr>
                        <td>
                            <Button className="mx-2 bg-green-600">Update</Button>
                        </td>
                        <td>
                            <Button className="mx-2 bg-red-600">Delete</Button>
                        </td>
                    </tr>
                </td>
            </tr>
        </table>
    </div>
  )
}

export default AppointmentList