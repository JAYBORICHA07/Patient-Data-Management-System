import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Headset, Mail, MapPinned } from "lucide-react";
import { useState } from "react";

function ContactUs() {

  type userType = {
    name: string;
    email: string;
    service: string;
    phoneNo: number | null;
    message: string
  }
  const [user, setUser] = useState<userType>({
    name: '',
    email: '',
    service: '',
    phoneNo: null,
    message: ''
  })
  const handleContactUs = () => {
    console.log(user)
  }

  return (
    <div className="grid grid-cols-1 mt-2 md:grid-cols-2 m-2">
      <div className="flex flex-col m-3 w-full">
        <div className="p-5 m-2">
          <h1 className="text-4xl font-bold">
            How Can I Help You?
          </h1>
        </div>
        <div className="border rounded-lg p-6 m-3  flex flex-row bg-blue-50">
          <MapPinned className=" text-base w-10 h-10 mx-10" />
          <div className="flex flex-col">
            <p className="font-bold text-lg">Address</p>
            <p className=" font-light text-base">Location</p>
          </div>

        </div>
        <div className="border rounded-lg p-6 m-3  flex flex-row bg-blue-50">
          <Headset className=" text-base w-10 h-10 mx-10" />
          <div className="flex flex-col">
            <p className="font-bold text-lg">Contact me</p>
            <p className=" font-light text-base">Number</p>
          </div>
        </div>
        <div className="border rounded-lg p-6 m-3  flex flex-ro3 bg-blue-50">
          <Mail className=" text-base w-10 h-10 mx-10" />
          <div className="flex flex-col">
            <p className="font-bold text-lg">Email</p>
            <p className=" font-light text-base">Email Address</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col  m-5 w-auto">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 m-2 p-2 ">
            <div className="p-2" >
              <Label className="block text-sm md:text-lg text-left font-semibold">
                Name
              </Label>
              <Input
                type="text"
                className="p-2 mt-2 border-2 bg-blue-50  md:p-5"
                placeholder="Enter name"
                required
                onChange={(e) => setUser({ ...user, name: e.target.value })}
              />
            </div>
            <div className="p-2" >
              <Label className="block text-sm md:text-lg text-left font-semibold ">
                Email
              </Label>
              <Input
                type="text"
                className="p-2 mt-2 border-2 bg-blue-50 md:p-5"
                placeholder="Enter Email"
                required
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </div>
            <div className="p-2" >
              <Label className="block text-sm md:text-lg text-left font-semibold ">
                Service
              </Label>
              <Input
                type="text"
                className="p-2 mt-2 border-2 bg-blue-50 md:p-5"
                placeholder="Enter Email"
                required
                onChange={(e) => setUser({ ...user, service: e.target.value })}
              />
            </div>
            <div className="p-2" >
              <Label className="block text-sm md:text-lg text-left font-semibold ">
                Phone No
              </Label>
              <Input
                type="text"
                className="p-2 mt-2 border-2 bg-blue-50 md:p-5"
                placeholder="Enter Email"
                required
                onChange={(e) => setUser({ ...user, phoneNo: Number(e.target.value) })}
              />
            </div>
          </div>
          <div className="p-2 m-4" >
            <Label className="block text-sm md:text-lg text-left font-semibold ">
              Message
            </Label>
            <Input
              type="text"
              className="p-2 mt-2 border-2 bg-blue-50 md:p-12 w-full"
              placeholder="Enter Email"
              required
              onChange={(e) => setUser({ ...user, message: e.target.value })}
            />
          </div>
          <div className="p-2 m-4">
            <Button className=" p-6 text-xl w-full  mb-2" onClick={handleContactUs}>
              Send Message
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs