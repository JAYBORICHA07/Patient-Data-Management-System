/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label, Separator } from "@radix-ui/react-dropdown-menu";
import {
  Controller,
  SubmitHandler,
  useController,
  useForm,
  FormProvider
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

function Appointment() {

  const methods = useForm();

  type userType = {
    patientName: string;
    doctorName: string;
    appointmentDate: Date;
    appointmentTime: string;
  };
  const { register, handleSubmit, setValue, control } = useForm<userType>();


   // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { field } = useController({
    name: "doctorName",
    control,
  });

  const [doctorList, setDoctorList] = useState();

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  function findDoctorNameById(name) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
    const doctor = doctorList.find((doctor) => doctor.name == name);
    console.log(doctor)
    return doctor ? doctor.doctorId : undefined;
}

  const user = checkUser()?.user;
  const patientId = checkUser()?.user.id;
  useEffect(() => {
    setValue("patientName", user.name);
    const getDocs = async () => {
      const docs = await GetAllDoctors();
      console.log(docs)
      setDoctorList(docs);
    };
    getDocs();
  },[]);


  const OnSubmit: SubmitHandler<userType> = async (data) => {
    console.log(data);
    console.log({ patientId, ...data });
    const authToken = getToken();
    const config = {
      headers: { Authorization: `Bearer ${authToken}` },
    };
    const doctorId = findDoctorNameById(data.doctorName)
    console.log(doctorId)
    const bodyParameter = {
      doctorId , patientId , ...data,
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
    <FormProvider {...methods}>
    <div className="flex flex-row justify-center">
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
                      <SelectItem value={docObject.name}>{docObject.name}</SelectItem>
                      <Separator className="my-2" />
                      </div>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )}
            />
          </div>
          <Label className="">Appointment Date</Label>
          <DatePicker lable="Choose date for appointment"/>


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
    </div>
    </FormProvider>
  );
}

export default Appointment;
