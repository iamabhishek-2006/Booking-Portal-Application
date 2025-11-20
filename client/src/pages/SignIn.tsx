import React from 'react'
import { Link } from 'react-router-dom';

const SignIn = () => {
     return (
    <div className="h-screen w-full bg-blue-950">
      <div className="flex items-center justify-center  ">
        <div className="h-[500px] w-[450px] border-1 border-indigo-500 mt-20 rounded-lg bg-white shadow-md ">
          <div className="flex flex-col  p-10">
            <h1 className="font-bold text-center font-serif">SignIn</h1>
      
            <label className="text-gray-700" htmlFor="">
              Email
            </label>
            <input
              className="text-red-950 border-1 border-gray-200 h-9 rounded-lg outline-none p-4"
              placeholder="your@gmail.com  "
            />
            <label className="text-gray-700" htmlFor="">
              Password
            </label>
            <input
              className=" text-red-950 border-1 border-gray-300  h-9 rounded-lg outline-none p-4"
              placeholder="Passkey"
            />
            <button className="bg-black text-white  h-9 rounded-lg mt-5 cursor-pointer">
              click me
            </button>
            <Link to="/forget">
              <h2 className="text-center text-bla underline ">
                Forget Your Password?
              </h2>
            </Link>
            <h1 className="text-black text-center">
              ---------------------or------------------------
            </h1>
          
            <div className="bg-black text-white cursor-pointer rounded-lg cursor-pointer">
              {/* <button className=""> */}
              <h1 className="flex items-center justify-center ">
                <img
                  src="removebg.png"
                  alt="google"
                  className="h-[30px] w-[60px]"
                />{" "}
                Sign in with Google
              </h1>
              {/* </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;