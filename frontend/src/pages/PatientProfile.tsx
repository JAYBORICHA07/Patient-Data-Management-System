import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@radix-ui/react-label"
import { SubmitHandler, useForm } from "react-hook-form"


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

    const onsubmit: SubmitHandler<userType> = async (data)=>{
        console.log(data)
    }
    const onError = (error: unknown) => console.log(error)
    return (
        <div>
            <div className="grid md:grid-cols-2 grid-cols-1 border border-r-2 rounded-lg p-2 m-3">
                <div className=" border border-r-2 rounded-lg m-2 w-fit row-span-1">
                    Doctor photo || doctor information
                    <div className="border border-r-2 rounded-lg m-5">Photo</div>
                    <div className="">
                        {/* This information whose change is not required for ui purpose*/}
                    </div>
                </div>
                <div className="">
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-2">
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
                    <div className="grid grid-cols-1 mt-3">
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
                                className="p-2 mt-2 border-2 bg-blue-50  md:p-5"
                                placeholder="Enter current medication detail"
                                required
                                {...register("ongoingMedication")}
                            />
                        </div>
                    </div>
                    <div>

                        <Button
                            className=" p-6 text-xl w-full mb-2 mt-5"
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