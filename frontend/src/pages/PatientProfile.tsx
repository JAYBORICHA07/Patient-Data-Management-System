import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { checkUser, getToken } from "@/utils/localStorageFunctions";
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { PatientType } from "@/utils/types";
import FormProvider from "../RHF/FormProvider";
import RHFTextfield from "@/components/ui/RHFTextfield";
import { useEffect } from "react";
import FetchData from "@/utils/FetchData";

function PatientProfile() {
  const patientId = checkUser()?.user?.id;
  let route = `profile`;

  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const formMethods = useForm<PatientType>();
  const { handleSubmit, reset } = formMethods;

  const {
    data: patientData,
    isLoading,
    isError,
  } = useQuery<PatientType>({
    queryFn:  async () =>  FetchData(),
    queryKey: ["patientData"],
  });

  if (patientData) {
    route = `profile/update`;
  }

  useEffect(() => {
    if (patientData) {
      reset({
        address: patientData?.address,
        alergies: patientData?.alergies,
        bloodGroup: patientData?.bloodGroup,
        city: patientData?.city,
        country: patientData?.country,
        dob: patientData?.dob,
        email: patientData?.email,
        familyMedicalHistory: patientData?.familyMedicalHistory,
        name: patientData?.name,
        ongoingMedication: patientData?.ongoingMedication,
        pastMedicalHistory: patientData?.pastMedicalHistory,
        phoneNumber: patientData?.phoneNumber,
        pincode: patientData?.pincode,
        state: patientData?.state,
      });
    }
  }, [isLoading, patientData, reset]);

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

  const onSubmit: SubmitHandler<PatientType> = async (data) => {
    const authToken = getToken();
    const config = {
      headers: { Authorization: `Bearer ${authToken}` },
    };
    const bodyParameter = {
      patientId,
      ...data,
    };
    const result = await axios.post(
      `http://localhost:8000/api/v1/patient/${route}`,
      bodyParameter,
      config
    );
    console.log(result);
    queryClient.invalidateQueries({ queryKey: ["patientData"] });
    alert("Data updated successfully");
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row rounded-lg p-2 m-3 ">
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
                navigate("/bookAppointment");
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
                Patient Basic Information
              </h1>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 mt-5 ">
              <RHFTextfield label="Enter Email" name="email" type="email" />
              <RHFTextfield label="Enter Name" name="name" />
              <RHFTextfield label="DOB" name="dob" type="date" />
              <RHFTextfield label="Blood Group" name="bloodGroup" />
              <RHFTextfield label="Mobile Number" name="phoneNumber" />
              <RHFTextfield label="Address" name="address" />
              <RHFTextfield label="City" name="city" />
              <RHFTextfield label="State" name="state" />
              <RHFTextfield label="Pincode" name="pincode" type="number" />
              <RHFTextfield label="Country" name="country" />
            </div>
            <div className="rounded-lg mt-3 pt-5">
              <div>
                <h4 className="border-b-4 text-2xl  font-semibold pb-2 border-blue-500 w-fit">
                  Some specification
                </h4>
              </div>
              <div className="grid grid-cols-1 mt-3 ">
                <RHFTextfield label="Alergies" name="alergies" />
                <RHFTextfield label="Past Medical History" name="pastMedicalHistory" />
                <RHFTextfield label="Family Medical History" name="familyMedicalHistory"/>
                <RHFTextfield label="Ongoing Medicatio" name="ongoingMedication" />
              </div>
            </div>
            <div className="flex justify-between items-center gap-2">
              <Button className=" p-6 text-xl w-full mb-2 mt-5 " type="submit">
                Update Details
              </Button>
            </div>
          </div>
        </FormProvider>
      </div>
    </div>
  );
}

export default PatientProfile;
