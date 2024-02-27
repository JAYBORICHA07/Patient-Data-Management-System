import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@radix-ui/react-dropdown-menu"
import { SubmitHandler, useForm } from "react-hook-form"

function Appointment() {
  type userType = {
    patientName:String,
    doctorName:String,
    bookingDate:Date,
    appointmentDate:Date,
    appointmentTime:String
  }
  const{
    register,handleSubmit}= useForm< userType>();

  const OnSubmit: SubmitHandler<userType> = async(data)=>{
        console.log(data);
        if(data){
            alert("Your appointment submitted succesfully")
        }
  }

  const OnError = (error:unknown)=>console.log(error)
  return (
    <div className="flex flex-row justify-center">
        <div className="border-2 rounded-xl m-5 shadow-inner border-blue-500  w-fit md:w-2/5 ">
            <div>
                <h1 className="text-3xl mx-7 mt-5 border-b-2 w-fit border-blue-500">Appontment Form</h1>
            </div>
            <div className="m-5 p-2 mt-3 mb-3">
                <Label className="">Patient Name</Label>
                <Input
                type="text"
                className="p-2 mt-2 border border-blue-500  md:p-5"
                placeholder="Enter patient name"
                required 
                {...register("patientName",{required:true})} />

                <Label className="">Doctor Name</Label>
                <Input
                type="text"
                className="p-2 mt-2 border border-blue-500 md:p-5"
                placeholder="Enter doctor name"
                required
                {...register("doctorName",{required:true})} />

                <Label className="">Booking Date</Label>
                <Input
                type="date"
                className="p-2 mt-2 border border-blue-500  md:p-5"
                required 
                {...register("bookingDate",{required:true})} />

                <Label className="">Appointment Date</Label>
                <Input
                type="date"
                className="p-2 mt-2 border  border-blue-500 md:p-5"
                required 
                {...register("appointmentDate",{required:true})} />

                <Label className="">Appointment Time</Label>
                <Input
                type="time"
                className="p-2 mt-2 border  border-blue-500 md:p-5"
                required 
                {...register("appointmentTime",{required:true})} />

                <Button 
                className="p-2 mt-4 md:p-5 w-full mb-3 "
                onClick={handleSubmit(OnSubmit,OnError)}>Submit</Button>
            </div>
        </div>
    </div>
  )
}

export default Appointment