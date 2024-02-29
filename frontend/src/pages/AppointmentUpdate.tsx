import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@radix-ui/react-label"

function AppointmentUpdate() {
  return (
    <div className="flex flex-row justify-center">
        <div className="border-2 rounded-xl m-5 shadow-inner border-blue-500  w-fit md:w-2/5 ">
            <div>
                <h1 className="text-3xl mx-7 mt-5 border-b-2 w-fit border-blue-500">Update Appontment Form</h1>
            </div>
            <div className="m-5 p-2 mt-3 mb-3">
                <Label className="">Patient Name</Label>
                <Input
                type="text"
                className="p-2 mt-2 border border-blue-500  md:p-5"
                placeholder="Enter patient name"
                required  />

                <Label className="">Doctor Name</Label>
                <Input
                type="text"
                className="p-2 mt-2 border border-blue-500 md:p-5"
                placeholder="Enter doctor name"
                required />

                <Label className="">Booking Date</Label>
                <Input
                type="date"
                className="p-2 mt-2 border border-blue-500  md:p-5"
                required  />
                
                <Label className="">Appointment Date</Label>
                <Input
                type="date"
                className="p-2 mt-2 border  border-blue-500 md:p-5"
                required  />

                <Label className="">Appointment Time</Label>
                <Input
                type="time"
                className="p-2 mt-2 border  border-blue-500 md:p-5"
                required  />
                <Button 
                className="p-2 mt-4 md:p-5 w-full mb-3 ">Update</Button>
            </div>
        </div>
    </div>
  )
}

export default AppointmentUpdate