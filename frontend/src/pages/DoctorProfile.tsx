import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { checkUser, getToken } from "@/utils/localStorageFunctions";
import { DoctorType } from "@/utils/types";
import { Label } from "@radix-ui/react-label"
import axios from "axios";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";


function DoctorProfile() {
    const doctorId = checkUser().user.id;
    const [doctorData, setDoctorData] = useState<DoctorType>()

    

    const{
        register,
        handleSubmit,
        setValue
    }= useForm<DoctorType>();



    useEffect(() => {
        const fetchData = async () => {
            try {
                const authToken = getToken();
                const config = {
                    headers: { Authorization: `Bearer ${authToken}` }
                };
                const bodyParameter = {
                    doctorId : doctorId
                }
    
                const response = await axios.post('http://localhost:8000/api/v1/doctor/profile/getone', 
                   bodyParameter,
                   config
                );
                setDoctorData(response.data); // Handle response data here
                if(doctorData){
                    setValue("clinicAddress", doctorData?.clinicAddress)
                    setValue("clinicCity",doctorData.clinicCity)
                    setValue("clinicName",doctorData.clinicName)
                    setValue("clinicState",doctorData.clinicState)
                    setValue("doctorRegistrationNumber",doctorData.doctorRegistrationNumber)
                    setValue("doctorRegistrationYear",doctorData.doctorRegistrationYear)
                    setValue("email",doctorData.email)
                    setValue("fees", doctorData.fees)
                    setValue("name", doctorData.name)
                    setValue("phoneNumber",doctorData.phoneNumber)
                    setValue("qualification", doctorData.qualification)
                    setValue("services", doctorData.services)
                    setValue("specialization", doctorData.specialization)
                } 
            } catch (error) {
                console.log('Error:', error); // Handle errors here
            }
        };
        fetchData();
    });


    const navigate = useNavigate()
    const onsubmit: SubmitHandler<DoctorType> = async (data)=>
    {
        console.log({ doctorId, ...data });
        const authToken = getToken();
        const config = {
          headers: { Authorization: `Bearer ${authToken}` },
        };
        const bodyParameter = {
            doctorId , ...data,
        };
        const result = await axios.post(
          "http://localhost:8000/api/v1/doctor/profile",
          bodyParameter,
          config
        );
        console.log(result);
    };
    const onError = (error:unknown)=> console.log(error);

    return (
        <div>
            <div className="flex flex-col md:flex-row rounded-lg p-2">
                <div className=" ml-5 border border-r-2 rounded-lg m-2 w-80 row-span-1 mx-10 mt-5">
                    <div className=" m-10 px-5 flex justify-center ">
                        <img src="../../public/profile.jfif" alt="profile image"></img>
                    </div>
                    <div className="flex justify-center ">
                    <Button className="" variant={"outline"}>
                    <a
                    href="upload"
                    className=" container"
                    >
                    Upload Photo
                    </a>
                    </Button>
                    </div>
                    <div className="mt-3">
                        <h1 className="text text-2xl px-2  font-semibold border-t-2 h-14 py-2 cursor-pointer hover:text-[#2463eb]  hover:bg-blue-50 mt-10"onClick={()=>{navigate('/doctorprofile')}}>Profile</h1>
                        <h1 className="text text-2xl px-2 font-semibold  border-t-2 h-14 py-2 cursor-pointer hover:text-[#2463eb] hover:bg-blue-50  mt-0"onClick={()=>{navigate('/appointment')}}>Appointment</h1>
                        <h1 className="text text-2xl px-2 font-semibold  border-t-2 h-14 py-2 cursor-pointer hover:text-[#2463eb] hover:bg-blue-50  mt-0"onClick={()=>{navigate('/changepassword')}}>Change Password</h1>
                        <h1 className="text text-2xl px-2 font-semibold border-b-2 border-t-2 h-14 py-2 cursor-pointer hover:text-[#2463eb] hover:bg-blue-50  mt-0"onClick={()=>{navigate('/')}}>Log Out</h1>
                    
                    </div>
                </div>
                <div className="px-2 mx-5">
                    <div className="flex py-1 mt-2 ">
                    <h1 className="text-xl lg:text-5xl font-semibold border-b-4 pb-2  border-blue-500 pt-10 md:pt-2 pr-12 mx-32 ml-0 pl-0  ">Doctor Basic Information</h1>
                    </div>
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-5 mr-3.5">
                        <div>
                        <Label className="">Email</Label>
                            <Input
                                type="email"
                                className="p-2 mt-2 border-2 bg-blue-50  md:p-5"
                                placeholder="Enter email"
                                required
                                {...register("email",{required:true})}
                            />
                        </div>
                        <div>
                        <Label className="">Name</Label>
                            <Input
                                type="text"
                                className="p-2 mt-2 border-2 bg-blue-50  md:p-5"
                                placeholder="Enter name"
                                required
                                {...register("name",{required:true})}
                            />
                        </div>
                        <div>
                        <Label className="">PhoneNumber</Label>
                            <Input
                                type="number"
                                className="p-2 mt-2 border-2 bg-blue-50  md:p-5"
                                placeholder="Enter name"
                                required
                                {...register("phoneNumber",{required:true})}
                            />
                        </div>
                        <div>
                        <Label className="">Qualification</Label>
                            <Input
                                type="text"
                                className="p-2 mt-2 border-2 bg-blue-50  md:p-5"
                                placeholder="Enter qualification"
                                required
                                {...register("qualification",{required:true})}
                            />
                        </div>
                        <div>
                        <Label className="">Specialization</Label>
                            <Input
                                type="text"
                                className="p-2 mt-2 border-2 bg-blue-50  md:p-5"
                                placeholder="Enter specialization"
                                required
                                {...register('specialization',{required:true})}
                            />
                        </div>
                        <div>
                        <Label className="">Registration Number</Label>
                            <Input
                                type="text"
                                className="p-2 mt-2 border-2 bg-blue-50  md:p-5"
                                placeholder="Enter Registration Number"
                                required
                                {...register("doctorRegistrationNumber",{required:true})}
                            />
                        </div>
                        <div>
                        <Label className="">Registration Year</Label>
                            <Input
                                type="text"
                                className="p-2 mt-2 border-2 bg-blue-50  md:p-5"
                                placeholder="Enter Registartion Year"
                                required
                                {...register("doctorRegistrationYear",{required:true})}
                            />
                        </div>
                        
                        <div>
                        <Label className="">Clinic Name</Label>
                            <Input
                                type="text"
                                className="p-2 mt-2 border-2 bg-blue-50  md:p-5"
                                placeholder="Enter name"
                                required
                                {...register("clinicName",{required:true})}
                            />
                        </div>
                        <div>
                        <Label className="">Clinic Address</Label>
                            <Input
                                type="text"
                                className="p-2 mt-2 border-2 bg-blue-50  md:p-5"
                                placeholder="Enter Clinic Address"
                                required
                                {...register("clinicAddress",{required:true})}
                            />
                        </div>
                        <div>
                        <Label className="">Clinic City</Label>
                            <Input
                                type="text"
                                className="p-2 mt-2 border-2 bg-blue-50  md:p-5"
                                placeholder="Enter Clinic City"
                                required
                                {...register("clinicCity",{required:true})}
                            />
                        </div>
                        <div>
                        <Label className="">Clinic State</Label>
                            <Input
                                type="text"
                                className="p-2 mt-2 border-2 bg-blue-50  md:p-5"
                                placeholder="Enter Clinic State"
                                required
                                {...register("clinicState",{required:true})}
                            />
                        </div>
                        <div>
                        <Label className="">Fees</Label>
                            <Input
                                type="number"
                                className="p-2 mt-2 border-2 bg-blue-50  md:p-5"
                                placeholder="Enter fees"
                                required
                                {...register("fees",{required:true})}
                            />
                        </div>
                    </div>
                    <div className=" mr-3.5">
                        <Label className="">Services</Label>
                        <Input
                            type="text"
                            className="p-2 mt-2 border-2 bg-blue-50  md:p-5"
                            placeholder="Enter name"
                            required
                            {...register("services",{required:true})}
                        />
                        <Button 
                         className=" p-6 text-xl w-full mb-2 mt-5"
                        type="submit"
                        onClick={handleSubmit(onsubmit,onError)}>
                        Update Details</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DoctorProfile
