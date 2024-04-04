import FormProvider from "@/RHF/FormProvider";
import RHFTextfield from "@/components/ui/RHFTextfield";
import { Button } from "@/components/ui/button";

import { SubmitHandler, useForm } from "react-hook-form";


function ChangePassword() {
    type userType = {
        newPassword:string,
        oldPassword:string,
        confirmPassword:string,
      }
      const formMethods = useForm<userType>();

      const { handleSubmit } = formMethods


    
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
            <FormProvider methods={formMethods} onSubmit={handleSubmit(OnSubmit)}>
            <div className="m-5 p-2 mt-3 mb-3">
                <RHFTextfield 
                    name="oldPassword"
                    label="Old Password"
                />
                <RHFTextfield 
                    name="newPassword"
                    label="New Password"
                />
                <Button 
                className="p-2 mt-4 md:p-5 w-full mb-3 "
                onClick={handleSubmit(OnSubmit,OnError)}>Change Password</Button>
            </div>
            </FormProvider>
        </div>
    </div>
  )
}

export default ChangePassword