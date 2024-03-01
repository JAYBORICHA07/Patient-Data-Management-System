import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import axios  from "axios"
import {
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { checkUser } from "@/utils/localStorageFunctions";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Login() {

  type UserType = {
    email: string;
    password: string;
  };

  const {
    register,
    handleSubmit,
  } = useForm<UserType>();

  const navigate = useNavigate()
  const user = checkUser()
  useEffect(()=>{
    if(user){
      navigate('/home')
    }
  })

  const onSubmit: SubmitHandler<UserType> = async (data: UserType) => {
    const result  = await axios.post("http://localhost:8000/api/v1/users/login", data)
    if(result?.data?.success){
      localStorage.setItem('user', JSON.stringify(result.data))
      navigate('/home')
    }else{
      alert("Invalid Credentials")
    }
  };
  const onError = (errors: unknown) => console.log(errors);

 
  
  return (
    <div className="grid grid-cols-2 items-center justify-center">
      <div className="hidden sm:block mt-20">
        <img
          src="../../../content-creation-isometric.png"
          alt="img"
          className=""
        />
      </div>
      <div className="container p-10 w-fit h-fit border-2 mt-22 rounded-xl border-blue-400 shadow-2xl">
        <h1 className=" text-center mt-4 font-semibold text-5xl sm:texl-4xl text-blue-500  border-b-2   border-double border-blue-400 rounded-lg h-20">
          Login
        </h1>
        <div className="flex flex-col gap-5 ">
          <form className="text-center mt-10 block w-72 ">
            <div>
              <Label
                htmlFor="Email"
                className="block text-sm md:text-lg text-left font-semibold"
              >
                Email
              </Label>
              <Input
                type="text"
                className="p-2 mt-3 border-2 bg-blue-50"
                placeholder="Enter Email"
                {...register("email", { required: true })}
              />
            </div>
            <div className="text-center mt-5 block">
              <Label
                htmlFor="Password"
                className="block text-sm md:text-lg text-left font-semibold"
              >
                Password
              </Label>
              <Input
                type="text"
                className="p-2 mt-3 border-2 bg-blue-50"
                placeholder="Enter password"
                {...register("password", { required: true })}
              />
            </div>
            <div className="block text-center mt-10 hover:text-blue-400  ">
              <Button
                className="p-5 w-full"
                type="submit"
                onClick={handleSubmit(onSubmit, onError)}
              >
                Login
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
