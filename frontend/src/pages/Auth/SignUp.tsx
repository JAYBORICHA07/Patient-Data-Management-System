import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

function SignUp() {

    type userType = {
        name: string,
        email: string,
        mobileNumber: number | null,
        pwd: string,
        confirmpwd: string
    }

    const [user, setUser] = useState<userType>({
        name: '',
        email: '',
        mobileNumber: null,
        pwd: '',
        confirmpwd: ''
    })

<<<<<<< Updated upstream
    const handleSignUp=()=>{
        console.log(user)
    }

    return (
        <div>
            <div className='container py-4 w-fit h-fit border-2  mt-4 rounded-lg border-blue-400'>


                <h1 className=' text-center mt-0 font-semibold text-5xl h-20 rounded-lg sm:texl-4xl border-b-2 border-double border-blue-400  text-blue-500'>SignUp</h1>
                <div className='flex flex-col gap-2 '>

                    <div className='text-center mt-6 block h-73 w-80'>
                    <div>
                            <Label  className='block text-sm md:text-sm text-left font-semibold'>User name</Label>

                            <Input type='text' className='p-2 mt-3 border-2 bg-blue-50' placeholder='Enter name' required onChange={(e) => setUser({ ...user, name: e.target.value })} />

                        </div>
                        <div>
                            <Label  className='block text-sm md:text-sm text-left font-semibold'>Email</Label>

                            <Input type='text' className='p-2 mt-3 border-2 bg-blue-50' placeholder='Enter Email' required onChange={(e) => setUser({ ...user, email: e.target.value })} />

                        </div>
                        <div>
                            <Label  className='block text-sm md:text-sm text-left font-semibold'>Mo. Number</Label>

                            <Input type="number" className='p-2 mt-3 border-2 bg-blue-50'  placeholder='Enter mobile number' required onChange={(e) => setUser({ ...user, mobileNumber: Number(e.target.value) })} />

                        </div>

                        <div className='text-center mt-4 block'>
                            <Label className='block text-sm md:text-sm text-left font-semibold'>Password</Label>
                            <Input type='text' className='p-2 mt-3 border-2 bg-blue-50'  placeholder='Enter password' required onChange={(e) => setUser({ ...user, pwd: e.target.value })} />


                        </div>

                        <div className='text-center mt-4 block'>
                            <Label  className='block text-sm md:text-sm text-left font-semibold'>Confirm Password</Label>
                            <Input type='text' className='p-2 mt-3 border-2 bg-blue-50' placeholder='Enter password' required onChange={(e) => setUser({ ...user, confirmpwd: e.target.value })} />


                        </div>

                        <div className='block text-center mt-6 hover:text-blue-400'>
                            <Button  className=" p-5 text-xl w-full" onClick={handleSignUp}>SignUp</Button>
                        </div>

                    </div>


                </div>
            </div>
        </div>
    )
=======
  return (
    <div className="grid grid-cols-2">
      <div className="md:container py-2 flex flex-col px-5 m-2 mx-1  w-fit    md:py-2 md:w-fit md:h-fit border-2  md:mt-6 rounded-lg border-blue-400">
        <h1 className=" text-center mt-0 font-semibold text-5xl h-16 rounded-lg sm:texl-4xl border-b-2 border-double border-blue-400  text-blue-500">
          SignUp
        </h1>
        <div className="flex flex-col gap-2 ">
          <div className="text-center mt-2 block h-fit w-80">
            <div>
              <Label className="block text-sm md:text-sm text-left font-semibold">
                User name
              </Label>
              <Input
                type="text"
                className="p-2 mt-2 border-2 bg-blue-50  md:p-1"
                placeholder="Enter name"
                required
                onChange={(e) => setUser({ ...user, name: e.target.value })}
              />
            </div>
            <div>
              <Label className="block text-sm md:text-sm text-left font-semibold mt-1">
                Email
              </Label>
              <Input
                type="text"
                className="p-2 mt-2 border-2 bg-blue-50 md:p-1"
                placeholder="Enter Email"
                required
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </div>
            <div>
              <Label className="block text-sm md:text-sm text-left font-semibold my-1">
                Mo. Number
              </Label>
              <Input
                type="number"
                className="p-2 mt-2 border-2 bg-blue-50 md:p-1"
                placeholder="Enter mobile number"
                required
                onChange={(e) =>
                  setUser({ ...user, mobileNumber: Number(e.target.value) })
                }
              />
            </div>
            <div className="text-center  block">
              <Label className="block text-sm md:text-sm text-left font-semibold mt-1">
                Password
              </Label>
              <Input
                type="text"
                className="p-2 mt-2 border-2 bg-blue-50 md:p-1"
                placeholder="Enter password"
                required
                onChange={(e) => setUser({ ...user, pwd: e.target.value })}
              />
            </div>
            <div className="text-center block">
              <Label className="block text-sm md:text-sm text-left font-semibold mt-1">
                Confirm Password
              </Label>
              <Input
                type="text"
                className="p-2 mt-2 border-2 bg-blue-50 md:p-1"
                placeholder="Enter password"
                required
                onChange={(e) =>
                  setUser({ ...user, confirmpwd: e.target.value })
                }
              />
            </div>
            <div className="block text-center mt-3 hover:text-blue-400">
              <Button className=" p-6 text-xl w-full mb-2" onClick={handleSignUp}>
                SignUp
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden  mt-16 py-4 h-[73%] w-[96%] sm:flex justify-center items-center">
        <img
          src="../../../public/signup1.svg"
          alt="img"
          className=""
        />
      </div>
    </div>
  );
>>>>>>> Stashed changes
}

export default SignUp