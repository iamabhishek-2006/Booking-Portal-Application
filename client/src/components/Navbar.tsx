// import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
// import {  CircleUser } from "lucide-react";
// import { Button } from "./ui/button";
// import { Link } from "react-router-dom";

import  { DropdownMenuDemo } from "./Menubar";


const Navbar = () => {
  return (
    <div className="h-[60px] w-full bg-blue-950 ">
      <div className="flex items-center justify-between ">
        <div className="flex items-center justify-center  ">
          {/* <img src="logo.png" className="h-20 w-20 text-amber-50" /> */}
          <h1 className="text-white  select-none font-semibold m-5 ">
            Flightify
          </h1>
        </div>
        <div className="">
          {/* <Link to="/signUp">
          <button className=" flex items-center justify-center rounded-xl mt-5 cursor-pointer m-5 text-white hover:text-blue-300  ">
              <CircleUser />
              SignUp
            </button>
          </Link> */}
          {/* <Button>Click me</Button> */}
          {/* <DropdownMenu>hjh</DropdownMenu> */}
          {/* <Menubar/> */}
          <DropdownMenuDemo>
          </DropdownMenuDemo>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
