import { Button } from "@/components/ui/button"
function AppointmentList() {
  return (
    <div className="flex justify-center text-lg">
        <table className=" border-2 ">
            <thead>
            <tr className="border-2">
            <th className="px-5 border-2">Sr.No</th>
            <th className="px-5 border-2">DoctorName</th>
            <th className="px-5 border-2">Appointment date</th>
            <th className="px-5 border-2">bookingDate</th>
            <th className="px-5 border-2">status</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td className="px-5 border-2">1</td>
                <td className="px-5 border-2">Dr ABC</td>
                <td className="px-5 border-2">1/03/2024</td>
                <td className="px-5 border-2">28/02/2024</td>
                <td>
                    <tr>
                        <td>
                            <Button className="mx-2 my-2">Update</Button>
                        </td>
                        <td>
                            <Button className="mx-2 bg-red-600">Delete</Button>
                        </td>
                    </tr>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
  )
}

export default AppointmentList