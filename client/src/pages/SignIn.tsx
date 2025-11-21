import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const SignIn = () => {
    const [loading,setLoading]=useState(false);
    const [form,setForm]=useState({
      email:"",
      password:""
    })
  
    const InputHandle=(event:React.ChangeEvent<HTMLInputElement>)=>{
      setForm({...form,[event.target.name]:event.target.value});
    }

    async function SubmitHandler(event:React.FormEvent<HTMLFormElement>) {
      event.preventDefault();

      try {
      setLoading(true);
      const url=import.meta.env.VITE_SERVER_URL;
      const res=await fetch(`${url}/auth/login`,{
        method:"POST",
        headers:{
         "Content-Type":"application/json",
        },
        body:JSON.stringify(form)
      })
      const data=await res.json();
      if(data.success){
        console.log("user login successfully");
      }else{
        return alert(data.error)
      }

      // set token in local storage

      localStorage.setItem("token", data.data.accesstoken);
      localStorage.setItem("refToken", data.data.refreshtoken);

      window.location.href="/"
      } catch (error) {
        console.log(error);
      }finally{
        setLoading(false);
      }
      
    }


     return (
       <form onSubmit={SubmitHandler} className="h-screen w-full bg-blue-950 flex items-center justify-center">
         <div className=" border border-indigo-500  rounded-lg bg-white shadow-md flex flex-col  p-5">
           <h1 className="font-bold text-center font-serif">SignIn</h1>

           <label className="text-gray-700" htmlFor="">
             Email
           </label>
           <input
             className="text-red-950 border border-gray-200  rounded-lg outline-none p-2"
             placeholder="your@gmail.com  "
             type="email"
             name="email"
             value={form.email}
             onChange={InputHandle}
           />
           <label className="text-gray-700" htmlFor="">
             Password
           </label>
           <input
             className=" text-red-950 border border-gray-300   rounded-lg outline-none p-2"
             placeholder="Passkey"
             type="password"
             name="password"
             value={form.password}
             onChange={InputHandle}
           />
           <button className="bg-black text-white  h-9 rounded-lg mt-5 cursor-pointer">
            {loading?"loading...":"login"}
           </button>
           <Link to="/forget">
             <h2 className="text-center text-bla underline ">
               Forget Your Password?
             </h2>
           </Link>
           <h1 className="text-black text-center">
             ---------------------or------------------------
           </h1>

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
}

export default SignIn;