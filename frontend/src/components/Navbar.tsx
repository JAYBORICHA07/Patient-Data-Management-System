import { Button } from "./ui/button";
import { LogInIcon, UserRoundPlus } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "./ui/separator";

const Navbar = () => {
  return (
    <>
      <div className="w-full p-4 m-0 h-16 sm:flex justify-between items-center hidden bg-[#f3f6f8]">
        <div className="flex justify-start items-center gap-3">
          <img
            src="../../vite.svg"
            alt="CompanyLogo"
            className="h-16 md:h-14"
          />
          <p className="hidden md:block">Patient Management System</p>
        </div>
        <div className="flex justify-end items-center gap-2">
          <Button variant={"ghost"}>
            <a href="/home">Home</a>
          </Button>
          <Button variant={"ghost"}>
            <a href="/about">About Us</a>
          </Button>
          <Button variant={"ghost"}>
            <a href="/contactus">Contact Us</a>
          </Button>
          { 
          <Button variant={"outline"}>
            <a
              href="register"
              className="flex justify-center items-center gap-2"
            >
              <UserRoundPlus size={"18px"} />
              Register
            </a>
          </Button>}
          {
          <Button>
            <a href="/login" className="flex justify-center items-center gap-2">
              {" "}
              <LogInIcon size={"18px"} />
              Login
            </a>
          </Button>}
        </div>
      </div>
      <div className="flex p-4 m-0 justify-end items-center sm:hidden bg-[#f3f6f8]">
        <Sheet>
          <SheetTrigger asChild>
            <Button>Menu</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-2">
              <Button variant={"ghost"}>
                <a href="/home">Home</a>
              </Button>
              <Separator />
              <Button variant={"ghost"}>
                <a href="/about">About Us</a>
              </Button>
              <Separator />
              <Button variant={"ghost"}>
                <a href="/contactus">Contact Us</a>
              </Button>
              <Separator />
              <Button variant={"outline"}>
                <a
                  href="register"
                  className="flex justify-center items-center gap-2"
                >
                  <UserRoundPlus size={"18px"} />
                  Register
                </a>
              </Button>
              {/* <Separator /> */}
              <Button>
                <a
                  href="/login"
                  className="flex justify-center items-center gap-2"
                >
                  {" "}
                  <LogInIcon size={"18px"} />
                  Login
                </a>
              </Button>
              <Separator />
            </div>
            <SheetFooter>
              {/* <SheetClose asChild>
                <Button type="submit">Save changes</Button>
              </SheetClose> */}
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};
export default Navbar;
