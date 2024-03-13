/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label, Separator } from "@radix-ui/react-dropdown-menu";
import {
  Controller,
  SubmitHandler,
  useController,
  useForm,
} from "react-hook-form";
import { checkUser, getToken } from "@/utils/localStorageFunctions";
import { useEffect, useState } from "react";
import { GetAllDoctors } from "@/utils/getAllDoc";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import axios from "axios";
import DatePicker from "@/components/DatePicker";
import { useNavigate } from "react-router-dom";
import { DoctorType } from "@/utils/types";
import RHFDatepicker from "@/components/ui/RHFDatepicker";
import FormProvider from "@/RHF/FormProvider";

function Appointment() {
  type userType = {
    patientName: string;
    doctorName: string;
    appointmentDate: Date;
    appointmentTime: string;
  };

  const formMethods = useForm<userType>();
  const { register, handleSubmit, setValue, control } = formMethods;

  const navigate = useNavigate();

  const { field } = useController({
    name: "doctorName",
    control,
  });

  const [doctorList, setDoctorList] = useState<DoctorType[]>([]);

  function findDoctorNameById(name: string) {
    const doctor = doctorList.find((doctor) => doctor.name == name);
    console.log(doctor);
    return doctor ? doctor.doctorId : undefined;
  }

  const user = checkUser()?.user;
  const patientId = checkUser()?.user.id;
  useEffect(() => {
    setValue("patientName", user.name);
    const getDocs = async () => {
      const docs = await GetAllDoctors();
      console.log(docs);
      setDoctorList(docs);
    };
    getDocs();
  }, []);

  const OnSubmit: SubmitHandler<userType> = async (data) => {
    console.log(data);
    console.log({ patientId, ...data });
    const authToken = getToken();
    const config = {
      headers: { Authorization: `Bearer ${authToken}` },
    };
    const doctorId = findDoctorNameById(data.doctorName);
    console.log(doctorId);
    const bodyParameter = {
      doctorId,
      patientId,
      ...data,
    };
    const result = await axios.post(
      "http://localhost:8000/api/v1/appointment/insert",
      bodyParameter,
      config
    );
    console.log(result);
    if (data) {
      alert("Your appointment submitted succesfully");
    }
  };

  const OnError = (error: unknown) => console.log(error);
  return (
    <div>
      <div className="flex justify-center items-center flex-col md:flex-row rounded-lg p-2 m-3 ">
        <div className="ml-5 border border-r-2 rounded-lg m-2 w-80 row-span-1 mx-10 mt-5">
          <div className=" m-10 px-5 flex justify-center ">
            <img src="../../public/profile.jfif" alt="profile image"></img>
          </div>
          <div className="flex justify-center ">
            <Button className="" variant={"outline"}>
              <a href="upload" className=" container">
                Upload Photo
              </a>
            </Button>
          </div>
          <div className="mt-3">
            <h1
              className="text text-2xl px-2  font-semibold border-t-2 h-14 py-2 cursor-pointer hover:text-[#2463eb]  hover:bg-blue-50 mt-10"
              onClick={() => {
                navigate("/patientprofile");
              }}
            >
              Profile
            </h1>
            <h1
              className="text text-2xl px-2 font-semibold  border-t-2 h-14 py-2 cursor-pointer hover:text-[#2463eb] hover:bg-blue-50  mt-0"
              onClick={() => {
                navigate("/appointment");
              }}
            >
              Appointment
            </h1>
            <h1
              className="text text-2xl px-2 font-semibold  border-t-2 h-14 py-2 cursor-pointer hover:text-[#2463eb] hover:bg-blue-50  mt-0"
              onClick={() => {
                navigate("/changepassword");
              }}
            >
              Change Password
            </h1>
            <h1
              className="text text-2xl px-2 font-semibold border-b-2 border-t-2 h-14 py-2 cursor-pointer hover:text-[#2463eb] hover:bg-blue-50  mt-0"
              onClick={() => {
                navigate("/");
              }}
            >
              Log Out
            </h1>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center w-full">
          <FormProvider methods={formMethods}>
            <div className="border-2 rounded-xl m-5 shadow-inner border-blue-500  w-fit md:w-2/5 ">
              <div>
                <h1 className="text-3xl mx-7 mt-5 border-b-2 w-fit border-blue-500">
                  Appontment Form
                </h1>
              </div>
              <div className="m-5 p-2 mt-3 mb-3">
                <Label className="">Patient Name</Label>
                <Input
                  type="text"
                  className="p-2 mt-2 border border-blue-500  md:p-5"
                  placeholder="Enter patient name"
                  required
                  disabled
                  {...register("patientName", { required: true })}
                />

                <Label className="">Doctor Name</Label>
                <div className=" block">
                  <Controller
                    name="doctorName"
                    control={control}
                    render={({ field }) => (
                      <Select {...field} onValueChange={field.onChange}>
                        <SelectTrigger className="bg-blue-50 p-2 mt-2 border-2 md:p-1">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            {
                              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                              // @ts-ignore
                              doctorList?.map((docObject, index) => (
                                <div key={index}>
                                  <SelectItem value={docObject.name}>
                                    {docObject.name}
                                  </SelectItem>
                                  <Separator className="my-2" />
                                </div>
                              ))
                            }
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    )}
                  />
                </div>
                <Label className="">Appointment Date</Label>
                <RHFDatepicker name={"appointmentDate"} lable="apni date" />
                {/* <Controller
              name="appointmentDate"
              control={control}
              render={({ field }) => (
          <DatePicker field={field} lable="Choose date for appointment"/>
              )}
            /> */}
                {/* <DatePicker lable="Choose date for appointment"/> */}
                <Label className="">Appointment Time</Label>
                <Input
                  type="time"
                  className="p-2 mt-2 border  border-blue-500 md:p-5"
                  required
                  {...register("appointmentTime", { required: true })}
                />
                <Button
                  className="p-2 mt-4 md:p-5 w-full mb-3 "
                  onClick={handleSubmit(OnSubmit, OnError)}
                >
                  Submit
                </Button>
              </div>
            </div>
            F
          </FormProvider>
        </div>
      </div>
    </div>
  );
}

export default Appointment;
