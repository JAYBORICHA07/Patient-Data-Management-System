import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@radix-ui/react-label"
import { UserRound } from "lucide-react"
import { SubmitHandler, useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"


function PatientProfile() {
    type userType = {
        name: string,
        email: string,
        dob: Date,
        bloodGroup: string,
        phoneNumber: number,
        address: string,
        city: string,
        state: string,
        pincode: number,
        country: string,
        alergies: string,
        pastMedicalHistory: string,
        familyMedicalHistory: string,
        ongoingMedication: string
    }
    const {
        register, handleSubmit } = useForm<userType>();
    const navigate = useNavigate();
    const onsubmit: SubmitHandler<userType> = async (data)=>{
        console.log(data)
    }
    const onError = (error: unknown) => console.log(error)
    return (
        <div>
            <div className="flex flex-col md:flex-row rounded-lg p-2 m-3 ">
                <div className="ml-5 border border-r-2 rounded-lg m-2 w-80 row-span-1 mx-10 mt-5">
                    {/*  border border-r-2 rounded-lg m-2 mx-2 max-w-fit */}
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
                        {/* This information whose change is not required for ui purpose*/}
                        {/* <h1 className="text-center text-2xl md:text-3xl ">Patient Name</h1>
                        <h1 className="text-center text-xl">Registration Id</h1>
                        <h1 className="text-center text-xl">DOB</h1>
                        <h1 className="text-center text-xl">Mobile Number</h1> */}
                        <h1 className="text text-2xl px-2  font-semibold border-t-2 h-14 py-2 cursor-pointer hover:text-[#2463eb]  hover:bg-blue-50 mt-10"onClick={()=>{navigate('/patientprofile')}}>Profile</h1>
                        <h1 className="text text-2xl px-2 font-semibold  border-t-2 h-14 py-2 cursor-pointer hover:text-[#2463eb] hover:bg-blue-50  mt-0"onClick={()=>{navigate('/appointment')}}>Appointment</h1>
                        <h1 className="text text-2xl px-2 font-semibold  border-t-2 h-14 py-2 cursor-pointer hover:text-[#2463eb] hover:bg-blue-50  mt-0"onClick={()=>{navigate('/changepassword')}}>Change Password</h1>
                        <h1 className="text text-2xl px-2 font-semibold border-b-2 border-t-2 h-14 py-2 cursor-pointer hover:text-[#2463eb] hover:bg-blue-50  mt-0"onClick={()=>{navigate('/home')}}>Log Out</h1>
                    </div>
                </div>
                <div className="px-2 mx-5">
                    <div className="flex py-1 mt-2 ">
                        <h1 className="text-xl lg:text-5xl font-semibold border-b-4 pb-2  border-blue-500 pt-10 md:pt-2 pr-12 mx-32 ml-0 pl-0  ">Patient Basic Information</h1>
                    </div>
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-5 ">
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
                            <Label className="">DOB</Label>
                            <Input
                                type="date"
                                className="p-2 mt-2 border-2 bg-blue-50  md:p-5"
                                required
                                {...register("dob",{required:true})}
                            />
                        </div>
                        <div>
                            <Label className="">Blood Group</Label>
                            <Input
                                type="text"
                                className="p-2 mt-2 border-2 bg-blue-50  md:p-5"
                                placeholder="Enter qualification"
                                required
                                {...register("bloodGroup",{required:true})}
                            />
                        </div>
                        <div>
                            <Label className="">Mobile Number</Label>
                            <Input
                                type="number"
                                className="p-2 mt-2 border-2 bg-blue-50  md:p-5"
                                placeholder="Enter Mobile Number"
                                required
                                {...register('phoneNumber',{required:true})}
                            />
                        </div>
                        <div>
                            <Label className="">Address</Label>
                            <Input
                                type="text"
                                className="p-2 mt-2 border-2 bg-blue-50  md:p-5"
                                placeholder="Enter Address"
                                required
                                {...register("address",{required:true})}
                            />
                        </div>
                        <div>
                            <Label className="">City</Label>
                            <Input
                                type="text"
                                className="p-2 mt-2 border-2 bg-blue-50  md:p-5"
                                placeholder="Enter City"
                                required
                                {...register("city",{required:true})}
                            />
                        </div>

                        <div>
                            <Label className="">State</Label>
                            <Input
                                type="text"
                                className="p-2 mt-2 border-2 bg-blue-50  md:p-5"
                                placeholder="Enter State"
                                required
                                {...register("state",{required:true})}
                            />
                        </div>
                        <div>
                            <Label className="">Pincode</Label>
                            <Input
                                type="number"
                                className="p-2 mt-2 border-2 bg-blue-50  md:p-5"
                                placeholder="Enter Pincode"
                                required
                                {...register("pincode",{required:true})}
                            />
                        </div>
                        <div>
                            <Label className="">Country</Label>
                            <Input
                                type="text"
                                className="p-2 mt-2 border-2 bg-blue-50  md:p-5"
                                placeholder="Enter Country"
                                required
                                {...register("country",{required:true})}
                            />
                        </div>
                    </div>
                    <div className="rounded-lg mt-3 pt-5">
                        <div>
                            <h4 className="border-b-4 text-2xl  font-semibold pb-2 border-blue-500 w-fit">Some specification</h4>
                        </div>
                        <div className="grid grid-cols-1 mt-3 ">
                            <div>
                                <Label className="">Alergies</Label>
                                <Input
                                    type="text"
                                    className="p-2 mt-2 border-2 bg-blue-50  md:p-5 my-3"
                                    placeholder="Enter if any allergies"
                                    required
                                    {...register("alergies")}
                                />
                            </div>
                            <div>
                                <Label className="">Past Medical History</Label>
                                <Input
                                    type="text"
                                    className="p-2 mt-2 border-2 bg-blue-50  md:p-5 my-3"
                                    placeholder="Enter Past Medical History"
                                    required
                                    {...register("pastMedicalHistory")}
                                />
                            </div>
                            <div>
                                <Label className="">Family Medical History</Label>
                                <Input
                                    type="text"
                                    className="p-2 mt-2 border-2 bg-blue-50  md:p-5 my-3"
                                    placeholder="Enter Any medical history of your family"
                                    required
                                    {...register("familyMedicalHistory")}
                                />
                            </div>
                            <div>
                                <Label className="">Ongoing Medication</Label>
                                <Input
                                    type="text"
                                    className="p-2 mt-2 border-2 bg-blue-50  md:p-5 mb-3"
                                    placeholder="Enter current medication detail"
                                    required
                                    {...register("ongoingMedication")}
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <Button
                            className=" p-6 text-xl w-full mb-2 mt-5 "
                            type="submit"
                            onClick={handleSubmit(onsubmit, onError)}>
                            Update Details</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PatientProfile