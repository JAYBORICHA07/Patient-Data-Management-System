import { MapPin } from "lucide-react";
import { PhoneCall } from "lucide-react";
import { Mail } from "lucide-react";
const Footer = () => {
  return (
    <div className="flex flex-col justify-between md:flex-row bg-[#f3f6f8] p-3">
      <div className="h-auto justify-center items-center sm:w-[20%] flex sm:flex-col gap-3">
        <div className="flex justify-start items-center gap-3 m-5">
          <img
            src="../../vite.svg"
            alt="CompanyLogo"
            className="h-16 md:h-14"
          />
          <p className="hidden md:block">Patient Management System</p>
        </div>
        <p className="text-sm">
          Experience hassle-free healthcare access and connect with trusted
          healthcare professionals effortlessly.
        </p>
      </div>
      <div className="h-auto w-auto flex flex-col gap-2 m-5">
        <p className="font-bold text-2xl text-[#2463eb]">For Patients</p>
        <div className="flex flex-col justify-start">
            <a href="/" className="p-1"><span className="flex items-center justify-start gap-2  text-slate-600 hover:text-[#2463eb] hover:scale-105 transition-transform duration-300 ease-in-out">
            Search Doctors
          </span></a>
          <a href="/" className="p-1"><span className="flex items-center justify-start gap-2  text-slate-600 hover:text-[#2463eb] hover:scale-105 transition-transform duration-300 ease-in-out">
            Login
          </span></a>
          <a href="/" className="p-1"><span className="flex items-center justify-start gap-2  text-slate-600 hover:text-[#2463eb] hover:scale-105 transition-transform duration-300 ease-in-out">
            Register
          </span></a>
        </div>
      </div>
      <div className="h-auto w-auto flex flex-col gap-2 m-5">
        <p className="font-bold text-2xl text-[#2463eb]">For Doctors</p>
        <div className="flex flex-col justify-start">
        <a href="/" className="p-1"><span className="flex text-slate-600 hover:text-[#2463eb] hover:scale-105 transition-transform duration-300 ease-in-out">
            Appointment
          </span></a>
          <a href="/" className="p-1"><span className="flex  text-slate-600 hover:text-[#2463eb] hover:scale-105 transition-transform duration-300 ease-in-out">
            Chat
          </span></a>
          <a href="/" className="p-1"><span className="flex  text-slate-600 hover:text-[#2463eb] hover:scale-105 transition-transform duration-300 ease-in-out">
            Log in
          </span></a>
        </div>
      </div>
      <div className="h-auto w-auto flex flex-col gap-1 m-5">
        <p className="font-bold text-2xl text-[#2463eb]">Contact Us</p>
        <div className="flex flex-col justify-start gap-2">
          <span className="flex items-center justify-start gap-2 p-1  text-black hover:text-[#2463eb] hover:scale-105 transition-transform duration-300 ease-in-out">
            <MapPin size={"18px"} />
            Ahmedabad, Gujarat
          </span>
          <span className="flex items-center justify-start gap-2 p-1  text-black hover:text-[#2463eb] hover:scale-105 transition-transform duration-300 ease-in-out">
            <PhoneCall size={"18px"} />
            +91 999-999-9999
          </span>
          <span className="flex items-center justify-start gap-2 p-1  text-black hover:text-[#2463eb] hover:scale-105 transition-transform duration-300 ease-in-out">
            <Mail size={"18px"} />
            support.management@gmail.com
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
