import RHFTextfield from "@/components/ui/RHFTextfield";
import { Button } from "@/components/ui/button";
import { checkUser, getToken } from "@/utils/localStorageFunctions";
import { DoctorType } from "@/utils/types";
import axios from "axios";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import FormProvider from "../RHF/FormProvider";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const FetchData = async () => {
    const doctorId = checkUser().user.id;

    try {
      const authToken = getToken();
      const config = {
        headers: { Authorization: `Bearer ${authToken}` },
      };
      const bodyParameter = {
        doctorId: doctorId,
      };
  
      const response = await axios.post(
        "http://localhost:8000/api/v1/doctor/profile/getone",
        bodyParameter,
        config
      );
      return response.data; // Handle response data here
    } catch (error) {
      console.log("Error:", error); // Handle errors here
    }
}

function DoctorProfile() {
  const doctorId = checkUser().user.id;
  let route = `profile`;

  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const formMethods = useForm<DoctorType>();
  const { handleSubmit, reset } = formMethods;
  

  const {
    data: doctorData,
    isLoading,
    isError,
  } = useQuery<DoctorType>({
    queryFn:  async () =>  FetchData(),
    queryKey: ["doctorData"],
  });
  if (doctorData) {
    console.log(doctorData)
    route = `profile/update`;
  }

  useEffect(() => {
    if (doctorData) {
        console.log(doctorData)
        reset({
          clinicAddress : doctorData?.clinicAddress,
          clinicCity : doctorData?.clinicCity,
          clinicName : doctorData?.clinicName,
          clinicState : doctorData?.clinicState,
          doctorRegistrationNumber : doctorData?.doctorRegistrationNumber,
          doctorRegistrationYear : doctorData?.doctorRegistrationYear,
          email : doctorData?.email,
          fees : doctorData?.fees,
          name : doctorData?.name,
          phoneNumber : doctorData?.phoneNumber,
          qualification : doctorData?.qualification,
          services : doctorData?.services,
          specialization : doctorData?.specialization 
        })
    }
},[isLoading, doctorData, reset]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center text-5xl">
        Loading....
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex items-center justify-center text-5xl">
        Something went wrong please reload your page.......
      </div>
    );
  }


  const onSubmit: SubmitHandler<DoctorType> = async (data) => {
    console.log({ doctorId, ...data });
    const authToken = getToken();
    const config = {
      headers: { Authorization: `Bearer ${authToken}` },
    };
    const bodyParameter = {
      doctorId,
      ...data,
    };
    const result = await axios.post(
      `http://localhost:8000/api/v1/doctor/${route}`,
      bodyParameter,
      config
    );
    console.log(result);
    queryClient.invalidateQueries({ queryKey: ["doctorData"] });
    alert("Data updated successfully");
  };
  const onError = (error: unknown) => console.log(error);

  return (
    <div>
      <div className="flex flex-col md:flex-row rounded-lg p-2">
        <div className=" ml-5 border border-r-2 rounded-lg m-2 w-80 row-span-1 mx-10 mt-5">
          <div className=" m-10 px-5 flex justify-center ">
            <img src="../../public/profile.jfif" alt="profile image"></img>
          </div>
          <div className="flex justify-center ">
            <Button className="" variant={"outline"}>
              <a href="upload" className=" container">
                Upload Photoo
              </a>
            </Button>
          </div>
          <div className="mt-3">
            <h1
              className="text text-2xl px-2  font-semibold border-t-2 h-14 py-2 cursor-pointer hover:text-[#2463eb]  hover:bg-blue-50 mt-10"
              onClick={() => {
                navigate("/doctorprofile");
              }}
            >
              Profile
            </h1>
            <h1
              className="text text-2xl px-2 font-semibold  border-t-2 h-14 py-2 cursor-pointer hover:text-[#2463eb] hover:bg-blue-50  mt-0"
              onClick={() => {
                navigate("/test");
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
        <FormProvider methods={formMethods} onSubmit={handleSubmit(onSubmit)}>
        <div className="px-2 mx-5">
          <div className="flex py-1 mt-2 ">
            <h1 className="text-xl lg:text-5xl font-semibold border-b-4 pb-2  border-blue-500 pt-10 md:pt-2 pr-12 mx-32 ml-0 pl-0  ">
              Doctor Basic Information
            </h1>
          </div>
          <div className="grid md:grid-cols-2">
          <RHFTextfield label="Enter Email" name="email" type="email" />
          <RHFTextfield label="Enter Name" name="name" />
          <RHFTextfield label="Enter Number" name="phoneNumber" />
          <RHFTextfield label="Enter qualification" name="qualification" />
          <RHFTextfield label="Enter specialization" name="specialization" />
          <RHFTextfield  label="Enter doctor registration number" name="doctorRegistrationNumber" />
          <RHFTextfield label="Enter doctor registration year" name="doctorRegistrationYear" type="number" />
          <RHFTextfield label="Enter Clinic name" name="clinicName" />
          <RHFTextfield label="Enter Clinic address" name="clinicAddress" />
          <RHFTextfield label="Enter Clinic city" name="clinicCity" />
          <RHFTextfield label="Enter Clinic state" name="clinicState" />
          <RHFTextfield label="Enter Clinic Fees" name="fees" />
          <RHFTextfield label="Enter Services" name="services" />
          </div>
          <div className="flex justify-end items-center">
          <Button
            className=" p-6 text-xl mb-2 mt-5 "
            type="submit"
            onClick={handleSubmit(onSubmit, onError)}
          >
            Update Details
          </Button>
          </div>
        </div>
        </FormProvider>
      </div>
    </div>
  );
}

export default DoctorProfile;
