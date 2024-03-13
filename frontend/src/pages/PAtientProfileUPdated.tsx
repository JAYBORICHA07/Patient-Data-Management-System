import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserRound } from "lucide-react";
import PatientProfile from "./PatientProfile";

const PatientProfileUPdated = () => {
  return (
    <div className="w-full h-screen">
      <Tabs
        defaultValue="account"
        className="w-full justify-between flex flex-col md:flex-row h-screen"
      >
        <div className="flex justify-center items-center w-[300px] h-screen">
          <TabsList className="flex flex-col gap-3 w-[300px] items-center justify-center h-screen">
            <UserRound
              size={150}
              color="#2463eb"
              strokeWidth={"2px"}
              className="bg-white"
            />
            <TabsTrigger
              value="profile"
              className="w-full text-xl focus:text-[#2463eb] font-semibold"
            >
              Profile
            </TabsTrigger>
            <TabsTrigger
              value="bookAppointments"
              className="w-full text-xl focus:text-[#2463eb] font-semibold"
            >
              Book Appointments
            </TabsTrigger>
            <TabsTrigger
              value="myAppointments"
              className="w-full text-xl focus:text-[#2463eb] font-semibold"
            >
              My Appointments
            </TabsTrigger>
            <TabsTrigger
              value="changePassword"
              className="w-full text-xl focus:text-[#2463eb] font-semibold"
            >
              Change Password
            </TabsTrigger>
          </TabsList>
        </div>
        <div className="flex justify-center items-center w-full overflow-scroll">
          <TabsContent value="profile" className="overflow-scroll">
            <PatientProfile />
          </TabsContent>
          <TabsContent value="password">Change your password here.</TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default PatientProfileUPdated;
