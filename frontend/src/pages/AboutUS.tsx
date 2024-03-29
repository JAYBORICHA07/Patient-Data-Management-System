import { LayoutDashboardIcon, LibraryBigIcon, LucideAlarmClockCheck, SmilePlus } from "lucide-react"

function AboutUS() {
  return (
    <div>
        <div className="grid grid-cols-1 md:grid-cols-2 m-2 mt-2">
            <div className="block p-2 w-auto my-3">
                <img src='../../Evolution of Healthcare Mobility Solutions Market _ Global Industry Forecast, 2019-2025.jfif' className="rounded-lg" alt="img1"></img>
            </div>
            <div className="m-5 px-5">
                <h1 className="text-4xl py-3 md:text-6xl text-[#2463eb] font-semibold">About Website</h1>
                <p className="block text-left py-3 text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam facere alias iusto in? Quis, nisi dolorum? Ex iste consectetur asperiores totam perspiciatis pariatur eaque natus accusamus, facilis amet! Reiciendis, recusandae.
                </p>
                <p className="block text-left py-3 text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam facere alias iusto in? Quis, nisi dolorum? Ex iste consectetur asperiores totam perspiciatis pariatur eaque natus accusamus, facilis amet! Reiciendis, recusandae.
                </p>
            </div>
        </div>
        <div className="flex justify-center mt-3 p-3">
            <h1 className="text-4xl md:text-5xl text-[#2463eb] font-semibold">Provided Service</h1>
        </div>
        <div className="grid grid-cols-1 m-3 md:grid-cols-4 py-2 ">
            <div className=" border m-2 rounded-lg h-auto cursor-pointer shadow bg-blue-50 hover:text-[#2463eb] hover:scale-105 transition-transform duration-300 ease-in-out">
                <div className="flex justify-center p-5 py-7">
                    <LucideAlarmClockCheck className="text-center h-16 w-16 text-[#2463eb]"/>
                </div>
                <div className=" text-center">
                    <h1 className=" text-2xl md:text-3xl">
                        24 * 7 Availaible
                    </h1>
                    <p className="p-5 mb-5 ">Anytime you want then you will able to talk with doctor and 24*7 service provided by platform</p>
                </div>
            </div>
            <div className=" border m-2 rounded-lg h-auto cursor-pointer shadow bg-blue-50 hover:text-[#2463eb] hover:scale-105 transition-transform duration-300 ease-in-out">
                <div className="flex justify-center p-5 py-7">
                    <LibraryBigIcon  className="text-center h-16 w-16 text-[#2463eb]"/>
                </div>
                <div className=" text-center">
                    <h1 className=" text-2xl md:text-3xl">
                        Medical Record
                    </h1>
                    <p className="p-5  mb-5">Anytime you want then you will able to talk with doctor and 24*7 service provided by platform</p>
                </div>
            </div>
            <div className=" border m-2 rounded-lg h-auto cursor-pointer shadow bg-blue-50 hover:text-[#2463eb] hover:scale-105 transition-transform duration-300 ease-in-out">
                <div className="flex justify-center p-5 py-7">
                    <LayoutDashboardIcon className="text-center h-16 w-16 text-[#2463eb]"/>
                </div>
                <div className=" text-center">
                    <h1 className=" text-2xl md:text-3xl">
                        Dashboard
                    </h1>
                    <p className="p-5  mb-5">Anytime you want then you will able to talk with doctor and 24*7 service provided by platform</p>
                </div>
            </div>
            <div className=" border m-2 rounded-lg h-auto cursor-pointer shadow bg-blue-50 hover:text-[#2463eb] hover:scale-105 transition-transform duration-300 ease-in-out">
                <div className="flex justify-center p-5 py-7">
                    <SmilePlus className="text-center h-16 w-16 text-[#2463eb] "/>
                </div>
                <div className=" text-center">
                    <h1 className=" text-2xl md:text-3xl">
                        Health Experience
                    </h1>
                    <p className="p-5  mb-5">Anytime you want then you will able to talk with doctor and 24*7 service provided by platform</p>
                </div>
            </div>
        </div>
        {/* <div className="m-2 mt-2 flex">
         
        </div> */}
    </div>
  )
}

export default AboutUS