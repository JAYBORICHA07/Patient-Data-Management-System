import { Activity, ActivitySquare, AmbulanceIcon, BrainCircuit, DatabaseBackupIcon, KeySquareIcon, MicroscopeIcon, PencilIcon, ShieldPlus, StethoscopeIcon, TicketCheck, User } from "lucide-react"
import { useNavigate } from "react-router-dom"

export default function Homepage() {
  const navigate = useNavigate()
  return (
    <main>
      <section className="mt-5 mx-5">
        <div className="flex flex-col sm:mx-5">
          <h1 className="text-4xl md:text-5xl text-[#2463eb] text-center font-bold mb-5 mt-5">Welcome to Patient data-magement System</h1>
          <div>
            <h4 className="text-xl flex justify-center text-center mb-10">
              <p className=" text-center w-3/4 font-semibold">Where we take care of all the burden of your appointment scheduling and management with our secure and robust system </p>
            </h4>
          </div>
        </div>
        <section className="grid grid-cols-1 md:grid-cols-2 mb-5 sm:mr-24">
          <img src='../../Evolution of Healthcare Mobility Solutions Market _ Global Industry Forecast, 2019-2025.jfif' className="rounded-lg mx-10" alt="img1"></img>
          <div>
            <div onClick={()=>(navigate('/doctorprofile'))} className="border rounded-lg p-7 m-3 w-3/4  mx-28 mt-0 flex bg-blue-50 flex-row hover:text-[#2463eb] hover:scale-105 transition-transform duration-300 ease-in-out">
            <StethoscopeIcon className=" text-base w-10 h-10 mx-10" />
              <div className="flex flex-col">
                <span className="font-bold text-lg" >Doctor</span>
                <p className=" font-light text-base">Location</p>
              </div>

            </div>

            <div  onClick={()=>(navigate('/patientprofile'))} className="border rounded-lg p-7 m-3 w-3/4  mx-28 mt-0 flex flex-row bg-blue-50 hover:text-[#2463eb] hover:scale-105 transition-transform duration-300 ease-in-out">
            <User className=" text-base w-10 h-10 mx-10" />
              <div className="flex flex-col">
                <span className="font-bold text-lg">Patient</span>
                <span className=" font-light text-base">Number</span>
              </div>
            </div>

            <div onClick={()=>(navigate('/appointment'))} className="border rounded-lg p-7 m-3 w-3/4  mx-28 mt-0 flex flex-ro3 bg-blue-50 hover:text-[#2463eb] hover:scale-105 transition-transform duration-300 ease-in-out">
            <PencilIcon className=" text-base w-10 h-10 mx-10" />
              <div className="flex flex-col">
                <span className="font-bold text-lg" >Appointment</span>
                <span className=" font-light text-base">Email Address</span>
              </div>
            </div>
          </div>
        </section>
      </section>
     
      <section>
        <div className="mt-3">
          <h1 className="text-xl md:text-3xl text-center mb-5 mt-10 font-semibold text-[#2463eb]">
            We are Always Ready to Help you & your family
          </h1>
          <div className="flex justify-center">
            <Activity className=" w-16 h-16 text-blue-500" />
          </div>
        </div>
        <div className="m-5 mx-32 sm:hidden">
          <div className="flex justify-between gap-14">
            <AmbulanceIcon className="w-20 h-20  text-[#2463eb] p-2  border border-blue-500 rounded-xl mx-5" />
            <p className="my-3 text-[#2463eb] text-3xl">---------</p>
            <ShieldPlus className="w-20 h-20 text-[#2463eb] p-2 border border-blue-500 rounded-xl mx-2.5 " />
            <p className="my-3 text-[#2463eb] text-3xl">---------</p>
            <StethoscopeIcon className="w-20 h-20 text-[#2463eb] p-2 mr-5  border border-blue-500 rounded-xl" />
          </div>
          <div className="flex justify-between">
            <p className="text-lg font-semibold flex mt-3">Medical Emergency</p>
            <p className="text-lg font-semibold flex mt-3">Medication</p>
            <p className="text-lg font-semibold flex mt-3 ">Doctor Treatment</p>
          </div>
        </div>
      </section>

      <section className="mb-5">
        <div>
          <h1 className="text-4xl md:text-6xl text-center mb-10 mt-10 text-[#2463eb] font-bold">Our highlight</h1>
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className=" flex flex-row  border m-5 rounded-lg h-40 cursor-pointer shadow bg-blue-50 hover:text-[#2463eb] hover:scale-105 transition-transform duration-300 ease-in-out">
              <div className=" p-7 border-[#2463eb] h-16 mt-10 py-2 m-5 border-r-2">
              <KeySquareIcon className="h-16 w-10 text-[#2463eb]"/>
              </div>
              <div className=" text-center">
                <h1 className="p-5 text-2xl md:text-2xl  mt-5 ">
                  Data Encryption and Security
                </h1>
              </div>
            </div>
            <div className="  flex flex-row border m-5 rounded-lg h-40 cursor-pointer shadow bg-blue-50 hover:text-[#2463eb] hover:scale-105 transition-transform duration-300 ease-in-out">
              <div className=" p-7 border-[#2463eb] h-16 mt-10 py-2 m-5 border-r-2">
                <BrainCircuit className="h-16 w-10 text-[#2463eb]"/>
              </div>
              <div className=" text-center">
                <h1 className="p-5 text-2xl md:text-2xl mt-5  ">
                  Generative Ai Analysis
                </h1>
              </div>
            </div>
            <div className="  flex flex-row border m-5 rounded-lg h-40 cursor-pointer shadow bg-blue-50  hover:text-[#2463eb] hover:scale-105 transition-transform duration-300 ease-in-out">
              <div className=" p-7 border-[#2463eb] h-16 mt-10 py-2 m-5 border-r-2">
                <TicketCheck className="h-16 w-10 text-[#2463eb]"/>
              </div>
              <div className=" text-center ">
                <h1 className="p-5 text-2xl md:text-2xl mt-7 ">
                  Standard Validation
                </h1>
              </div>
            </div>
            <div className="  flex flex-row border m-5 rounded-lg h-40 cursor-pointer shadow bg-blue-50  hover:text-[#2463eb] hover:scale-105 transition-transform duration-300 ease-in-out">
              <div className=" p-7 border-[#2463eb] h-16 mt-10 py-2 m-5 border-r-2">
                <DatabaseBackupIcon  className="h-16 w-10 text-[#2463eb]" />
              </div>
              <div className=" text-center">
                <h1 className="p-5 text-2xl md:text-2xl mt-5 ">
                  Maintain Medical history
                </h1>
              </div>
            </div>
            <div className=" flex flex-row  border m-5 rounded-lg h-40 cursor-pointer shadow bg-blue-50  hover:text-[#2463eb] hover:scale-105 transition-transform duration-300 ease-in-out">
              <div className=" p-7 border-[#2463eb] h-16 mt-10 py-2 m-5 border-r-2">
                <MicroscopeIcon  className="h-16 w-10 text-[#2463eb]"/>
              </div>
              <div className=" text-center">
                <h1 className="p-5 text-2xl md:text-2xl  mt-5">
                  Doctor & Patient Dashboard
                </h1>
              </div>
            </div>
            <div className=" flex flex-row  border m-5 rounded-lg h-40 cursor-pointer shadow bg-blue-50  hover:text-[#2463eb] hover:scale-105 transition-transform duration-300 ease-in-out">
              <div className=" p-7 border-[#2463eb] h-16 mt-10 py-2 m-5 border-r-2">
                <ActivitySquare  className="h-16 w-10 text-[#2463eb]"/>
              </div>
              <div className=" text-center">
                <h1 className="p-5 text-2xl md:text-2xl mt-7">
                  Health Checkup
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="mt-5 mx-5">
      <img src='../../Healthcare data icons stock photos, royalty-free images, vectors, video.jfif' className="rounded-lg w-full h-72" alt="img1"></img>
      </section> */}
    </main>
  )
}

