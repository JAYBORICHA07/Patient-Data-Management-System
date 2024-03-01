import { Button } from "@/components/ui/button";
import { Input, } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

import { SubmitHandler, useForm } from "react-hook-form";


function ChangePassword() {
    type userType = {
        newPassword:String,
        oldPassword:String,
        confirmPassword:String,
      }
      const{
        register,handleSubmit}= useForm< userType>();
      const OnSubmit:  SubmitHandler<userType> = async(data)=>{
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
                <h1 className="text-3xl mx-7 mt-5 border-b-2 w-fit border-blue-500">Change Password</h1>
            </div>
            <div className="m-5 p-2 mt-3 mb-3">
                <Label className="">Old Password</Label>
                <Input
                type="password"
                className="p-2 mt-2 border border-blue-500  md:p-5"
                placeholder="Enter old"
                required 
                {...register("oldPassword",{required:true})} />

                <Label className="">New Password</Label>
                <Input
                type="password"
                className="p-2 mt-2 border border-blue-500 md:p-5"
                placeholder="Enter new"
                required
                {...register("newPassword",{required:true})} />

                <Label className="">Confirm Password</Label>
                <Input
                type="password"
                className="p-2 mt-2 border border-blue-500  md:p-5"
                placeholder="enter for confirmation"
                required 
                {...register("confirmPassword",{required:true})} />

                <Button 
                className="p-2 mt-4 md:p-5 w-full mb-3 "
                onClick={handleSubmit(OnSubmit,OnError)}>Change Password</Button>
            </div>
        </div>
    </div>
  )
}

export default ChangePassword