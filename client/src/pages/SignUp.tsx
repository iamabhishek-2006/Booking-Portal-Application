import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [loading,setLoading]=useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone:"",
    password: "",
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const eleName = e.target.name;
    const eleValue = e.target.value;
    setForm({ ...form, [eleName]: eleValue });
  };

  const formSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);
      const url = import.meta.env.VITE_SERVER_URL;
      const res = await fetch(`${url}/auth/register`,{
          method:"POST",
          headers:{
            "Content-type":"application/json",
          },
          body:JSON.stringify(form)
      });
      const data=await res.json();
      console.log(data);
      if(!data.success){
        return alert("sing up failed please try again");
      }
      window.location.href=("/")
    } catch (error) {
      console.log(error);
    }finally{
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={formSubmit}
      className="h-screen w-full bg-blue-950 flex items-center justify-center"
    >
      <div className="  border border-indigo-500 mt-20 rounded-lg bg-white shadow-md flex flex-col  p-5 ">
        <h1 className="font-bold text-center font-serif">SignUp</h1>
        <label className="text-gray-700" htmlFor="">
          Name
        </label>
        <input
          className="text-red-950 p-2 rounded-lg border border-gray-300 outline-none "
          placeholder="Enter Your Name"
          type="text"
          onChange={handleInput}
          name="name"
        />

        <label className="text-gray-700" htmlFor="">
          Email
        </label>
        <input
          className="text-red-950 border border-gray-200  rounded-lg outline-none p-2"
          placeholder="your@gmail.com  "
          type="email"
          onChange={handleInput}
          name="email"
        />
        <label className="text-gray-700" htmlFor="">
          Phone
        </label>
        <input
          className="text-red-950 border border-gray-200  rounded-lg outline-none p-2"
          placeholder="Mobile Number"
          type="number"
          onChange={handleInput}
          name="phone"
        />
        <label className="text-gray-700" htmlFor="">
          Password
        </label>
        <input
          className=" text-red-950 border border-gray-300  rounded-lg outline-none p-2"
          placeholder="Passkey"
          type="password"
          onChange={handleInput}
          name="password"
        />
        <button className="bg-black text-white  h-9 rounded-lg mt-5 cursor-pointer">
          {loading? "...process":"singin"}
        </button>
        <h1 className="text-black text-center">
          ---------------------or------------------------
        </h1>
        <p className="text-center text-black">
          already have an account
          <Link to="/signIn" className="text-blue-600 hover:text-red-500 ">
            SignIn
          </Link>
        </p>
        <div className="bg-black text-white  rounded-lg cursor-pointer">
          <h1 className="flex items-center justify-center ">
            <img
              src="removebg.png"
              alt="google"
              className="h-[30px] w-[60px]"
            />
            Sign in with Google
          </h1>
        </div>
      </div>
    </form>
  );
};

export default SignUp;
