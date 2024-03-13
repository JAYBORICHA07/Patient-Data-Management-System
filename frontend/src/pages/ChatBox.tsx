import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChatType } from "@/utils/types";
import { Send } from "lucide-react"
import { SubmitHandler, useForm } from "react-hook-form"

function ChatBox() {

  
  const{register,handleSubmit} = useForm<ChatType>();

  const onSubmit: SubmitHandler<ChatType> = async(data: ChatType)=>{
    console.log(data)
  }
  const OnError = (errors:unknown) => console.log(errors)
  return (
    <main className="flex flex-col md:flex-row">
        <section className="border-2  w-1/2 flex justify-center rounded-xl h-fit border-[#2463eb] flex-col mt-5 mb-5 m-5 mx-10">
            <div className="border-b-2 border-[#2463eb] md:h-12 flex justify-center">
                <h3 className="py-2 sm:px-4 text-lg font-semibold  text-[#2463eb]">Welcome to Patient Management System</h3>
            </div>
            <div className=" h-56 flex flex-col justify-center m-5 p-5">
                <div className=" text-end border shadow rounded-lg p-2 my-5 mb-3 bg-blue-50">
                Request
                </div>
                <div className="text-start border shadow rounded-lg p-2 my-5 w-fit h-fit bg-[#2463eb] text-white">
                Response
                </div>
            </div>
            <div className="flex flex-row justify-center h-12 mt-2 mb-3">
                <Input className="border mb-2 rounded-xl  w-3/5  md:w-3/4 border-[#2463eb] " type="text" placeholder="Enter Your message"
                {...register("text",{required:true})}/> 
                <Button className="mx-3" onClick={handleSubmit(onSubmit,OnError)}><Send/></Button>
            </div>
        </section>
        <section className="mt-5 mb-5 mx-10 w-1/2">
            <img src="../../public/chat.jpg" className=" rounded-xl h-full" alt="Chatbox img"></img>
        </section>
    </main>
  )
}

export default ChatBox