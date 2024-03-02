import AppointmentTable from "@/components/ui/AppointmentTable"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

function PatientDashboard() {
    const navigate =useNavigate()
  return (
    <div>
    <div className="flex flex-col md:flex-row rounded-lg p-2">
        <div className=" ml-5 border border-r-2 border-[#2463eb] rounded-lg m-2 w-80 row-span-1 mx-10 mt-5">
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
                {/* This information whose change is not required for ui purpose only*/}
                {/* <h1 className="text-center text-2xl md:text-3xl ">Dr Name</h1>
    <h1 className="text-center text-xl">Specialization</h1>
    <h1 className="text-center text-xl">Registartion Number</h1>
    <h1 className="text-center text-xl">Registration Year</h1> */}
                <h1 className="text text-2xl px-2  font-semibold  border-[#2463eb] border-t h-14 py-2 cursor-pointer hover:text-[#2463eb]  hover:bg-blue-50 mt-10" onClick={() => { navigate('/doctorprofile') }}>Profile</h1>
                <h1 className="text text-2xl px-2 font-semibold  border-[#2463eb]  border-t h-14 py-2 cursor-pointer hover:text-[#2463eb] hover:bg-blue-50  mt-0" onClick={() => { navigate('/appointment') }}>Appointment</h1>
                <h1 className="text text-2xl px-2 font-semibold   border-[#2463eb] border-t h-14 py-2 cursor-pointer hover:text-[#2463eb] hover:bg-blue-50  mt-0" onClick={() => { navigate('/changepassword') }}>Change Password</h1>
                <h1 className="text text-2xl px-2 font-semibold border-[#2463eb]  border-b border-t h-14 py-2 cursor-pointer hover:text-[#2463eb] hover:bg-blue-50  mt-0" onClick={() => { navigate('/') }}>Log Out</h1>

            </div>
        </div>
        <div className="px-2 mx-5">
            <div className="text-xl mt-5 mx-3 font-semibold">
                Patient Appointment
            </div>
            <AppointmentTable />
        </div>
    </div>
    <div>
    </div>
</div>
  )
}

export default PatientDashboard