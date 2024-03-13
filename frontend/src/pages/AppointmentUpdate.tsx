import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function AppointmentUpdate() {
  type userType = {
    patientName: string;
    doctorName: string;
    appointmentDate: string;
    appointmentTime: string;
  };
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm<userType>();
  const OnSubmit: SubmitHandler<userType> = async (data) => {
    console.log(data);
    if (data) {
      alert("Your appointment submitted succesfully");
    }
  };
  const OnError = (error: unknown) => console.log(error);
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
        <div className="flex flex-row justify-center">
          <div className="border-2 rounded-xl m-5 shadow-inner border-blue-500  w-fit md:w-2/5 ">
            <div>
              <h1 className="text-3xl mx-7 mt-5 border-b-2 w-fit border-blue-500">
                Update Appontment Form
              </h1>
            </div>
            <div className="m-5 p-2 mt-3 mb-3">
              <Label className="">Patient Name</Label>
              <Input
                type="text"
                className="p-2 mt-2 border border-blue-500  md:p-5"
                placeholder="Enter patient name"
                required
                {...register("patientName", { required: true })}
              />

              <Label className="">Doctor Name</Label>
              <Input
                type="text"
                className="p-2 mt-2 border border-blue-500 md:p-5"
                placeholder="Enter doctor name"
                required
                {...register("doctorName", { required: true })}
              />

              <Label className="">Appointment Date</Label>
              <Input
                type="date"
                className="p-2 mt-2 border  border-blue-500 md:p-5"
                required
                {...register("appointmentDate", { required: true })}
              />

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
                Update
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppointmentUpdate;
