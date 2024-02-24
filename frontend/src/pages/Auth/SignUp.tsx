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

    const handleSignUp=()=>{
        console.log(user)
    }

    return (
        <div>
            <div className='container p-10 w-fit h-fit border-2 mt-10 rounded-lg border-orange-200'>


                <h1 className=' text-center mt-5 font-semibold text-5xl sm:texl-4xl text-orange-500'>SignUp</h1>
                <div className='flex flex-col gap-5 '>

                    <div className='text-center mt-10 block'>
                    <div>
                            <Label  className='block text-sm md:text-lg text-left font-semibold'>User name</Label>

                            <Input type='text' className='p-2 mt-3 border-2' placeholder='Enter name' required onChange={(e) => setUser({ ...user, name: e.target.value })} />

                        </div>
                        <div>
                            <Label  className='block text-sm md:text-lg text-left font-semibold'>Email</Label>

                            <Input type='text' className='p-2 mt-3 border-2' placeholder='Enter Email' required onChange={(e) => setUser({ ...user, email: e.target.value })} />

                        </div>
                        <div>
                            <Label  className='block text-sm md:text-lg text-left font-semibold'>Mo. Number</Label>

                            <Input type="number" className='p-2 mt-3 border-2'  placeholder='Enter mobile number' required onChange={(e) => setUser({ ...user, mobileNumber: Number(e.target.value) })} />

                        </div>

                        <div className='text-center mt-5 block'>
                            <Label className='block text-sm md:text-lg text-left font-semibold'>Password</Label>
                            <Input type='text' className='p-2 mt-3 border-2'  placeholder='Enter password' required onChange={(e) => setUser({ ...user, pwd: e.target.value })} />


                        </div>

                        <div className='text-center mt-5 block'>
                            <Label  className='block text-sm md:text-lg text-left font-semibold'>Confirm Password</Label>
                            <Input type='text' className='p-2 mt-3 border-2' placeholder='Enter password' required onChange={(e) => setUser({ ...user, confirmpwd: e.target.value })} />


                        </div>

                        <div className='block text-center mt-10'>
                            <Button onClick={handleSignUp}>SignUp</Button>
                        </div>

                    </div>


                </div>
            </div>
        </div>
    )
}

export default SignUp