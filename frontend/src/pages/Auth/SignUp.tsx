import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
// import { supabase } from "@/utils/supabase";
import {
  SubmitHandler,
  useForm,
  Controller,
  useController,
} from "react-hook-form";

function SignUp() {
  const roles = ["PATIENT", "DOCTOR", "MANAGEMENT"] as const;
  type Role = (typeof roles)[number];

  type UserType = {
    name: string;
    email: string;
    phoneNumber: number | null;
    password: string;
    role: Role;
  };

  const {
    register,
    handleSubmit,
    control,
  } = useForm<UserType>();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { field } = useController({
    name: "role",
    control,
  });

  const onSubmit: SubmitHandler<UserType> = async (data: UserType) => {
    console.log(data)
  };
  const onError = (errors: unknown) => console.log(errors);

  // const handleSignUp = async () => {
  //   const { data, error } = await supabase
  //     .from("users")
  //     .insert({
  //       name: user.name,
  //       email : user.email,
  //       phoneNumber : user.mobileNumber,
  //       role: user.role,
  //       password : user.password
  //     })
  //     .select();
  //     if(error){
  //       alert(error.message)
  //     }else{
  //       console.log(data)
  //     }
  // };

  return (
    <div className="grid grid-cols-2">
      <div className="md:container py-2 flex flex-col px-5 m-2 mx-1  w-fit    md:py-2 md:w-fit md:h-fit border-2  md:mt-6 rounded-lg border-blue-400">
        <h1 className=" text-center mt-0 font-semibold text-5xl h-16 rounded-lg sm:texl-4xl border-b-2 border-double border-blue-400  text-blue-500">
          SignUp
        </h1>
        <div className="flex flex-col gap-2 ">
          <form className="text-center mt-2 block h-fit w-80">
            <div>
              <Label className="block text-sm md:text-sm text-left font-semibold">
                User name
              </Label>
              <Input
                type="text"
                className="p-2 mt-2 border-2 bg-blue-50  md:p-1"
                placeholder="Enter name"
                required
                // onChange={(e) => setUser({ ...user, name: e.target.value })}
                {...register("name", { required: true })}
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
                {...register("email", { required: true })}
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
                {...register("phoneNumber", { required: true })}
              />
            </div>
            <div className="text-center block">
              <Label className="block text-sm md:text-sm text-left font-semibold mt-1">
                Select Role
              </Label>
              <Controller
                name="role"
                control={control}
                render={({ field }) => (
                  <Select {...field} onValueChange={field.onChange}>
                    <SelectTrigger className="bg-blue-50 p-2 mt-2 border-2 md:p-1">
                      <SelectValue placeholder="Select Role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="PATIENT">Patient</SelectItem>
                        <Separator className="my-2" />
                        <SelectItem value="DOCTOR">Doctor</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                )}
              />
            </div>
            <div className="text-center  block">
              <Label className="block text-sm md:text-sm text-left font-semibold mt-1">
                Password
              </Label>
              <Input
                type="password"
                className="p-2 mt-2 border-2 bg-blue-50 md:p-1"
                placeholder="Enter password"
                required
                {...register("password", { required: true })}
              />
            </div>
            <div className="block text-center mt-3 hover:text-blue-400">
              <Button
                className=" p-6 text-xl w-full mb-2"
                type="submit"
                onClick={handleSubmit(onSubmit, onError)}
              >
                SignUp
              </Button>
            </div>
          </form>
        </div>
      </div>
      <div className="hidden  mt-16 py-4 h-[73%] w-[96%] sm:flex justify-center items-center">
        <img src="../../../signup1.svg" alt="img" className="" />
      </div>
    </div>
  );
}

export default SignUp;
