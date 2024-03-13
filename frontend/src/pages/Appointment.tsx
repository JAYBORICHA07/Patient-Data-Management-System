
import { Button } from "@/components/ui/button";
import {
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { checkUser, getToken } from "@/utils/localStorageFunctions";
import { useEffect, useState } from "react";
import { GetAllDoctors } from "@/utils/getAllDoc";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AppointmentUserType, DoctorType } from "@/utils/types";
import RHFDatepicker from "@/components/ui/RHFDatepicker";
import FormProvider from "@/RHF/FormProvider";
import RHFTextfield from "@/components/ui/RHFTextfield";
import RHFSelect from "@/components/ui/RHFSelect";

function Appointment() {
  

  const formMethods = useForm<AppointmentUserType>();
  const { handleSubmit, setValue } = formMethods;

  const navigate = useNavigate()

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
      const docs : DoctorType[] = await GetAllDoctors();
      setDoctorList(docs);
    };
    getDocs();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const OnSubmit: SubmitHandler<AppointmentUserType> = async (data) => {
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
            <div className="border-2 rounded-xl m-5 shadow-inner border-blue-500  w-full ">
              <div>
                <h1 className="text-3xl mx-7 mt-5 border-b-2 w-fit border-blue-500">
                  Appontment Form
                </h1>
              </div>
              <div className="m-5 p-2 mt-3 mb-3">
                <RHFTextfield label="Patient Name" name="patientName"/>
                <RHFSelect name="doctorName" label="Selet Doctor" options={doctorList.map((doctor : DoctorType) => (doctor?.name))} />
                <RHFDatepicker name={"appointmentDate"} lable="Appointment Date" />
                <RHFTextfield label="Appointment Time" name="appointmentTime" type="time"/>
                <Button
                  className="p-2 mt-4 md:p-5 w-full mb-3 "
                  onClick={handleSubmit(OnSubmit, OnError)}
                >
                  Submit
                </Button>
              </div>
            </div>
          </FormProvider>
        </div>
      </div>
    </div>
  );
}

export default Appointment;
