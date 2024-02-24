

import { Button } from '@/components/ui/button';
import  { useState } from 'react';
import { Label } from "@/components/ui/label"
import { Input } from '@/components/ui/input';

function Login() {

  type userType = {
      email:string,
      pwd:string
  }
  const[user,setUser] = useState<userType>({

    email:'', 
    pwd:''

  })

  const handleLogin=()=>{
    console.log("hello");

    // let result= await fetch("/url",{

    //     method:"post",
    //     body: result.Json.Stringyfy({Email,pwd}),
    //     headers: {
    //         'Content-type': 'application/json'
    //     }
    // })
    // result = await result.json()
    // console.log(result)
  }
  return (
    <div >
        <div className='container p-10 w-fit h-fit border-2 mt-10 rounded-lg border-orange-200'>

       
         <h1 className=' text-center mt-5 font-semibold text-5xl sm:texl-4xl text-orange-500'>Login</h1>
        <div className='flex flex-col gap-5 '>
           
            <div className='text-center mt-10 block'>
                  <div>
                  <Label htmlFor='Email' className='block text-sm md:text-lg text-left font-semibold'>Email</Label>
                  
                  <Input type='text' className='p-2 mt-3 border-2'   name='Email' placeholder='Enter Email' required onChange={(e)=>setUser({...user,email:e.target.value})}/>
                
                  </div>

                  <div className='text-center mt-5 block'>
                  <Label htmlFor='Password' className='block text-sm md:text-lg text-left font-semibold'>Password</Label>
                  <Input type='text' className='p-2 mt-3 border-2'   name='pwd' placeholder='Enter password' required onChange={(e)=>setUser({...user,pwd:e.target.value})}/>
                
                  
                  </div>

                  <div className='block text-center mt-10'>
                  <Button onClick={handleLogin}>Login</Button>
                  </div>
            
            </div>
        

            </div>
            </div>
            
        </div>
  )
}

export default Login