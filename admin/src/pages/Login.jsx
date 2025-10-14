import React, { useEffect, useState } from 'react'
import style from "../styles/login.module.css"

const Login = () => {
  const [loading,setLaoding]=useState(false)
  const [formData,setFormData]=useState({
    email:"",
    password:""
  })

  const inputHandler=(e)=>{
    const eleName=e.target.name;
    const value=e.target.value;
    setFormData({...formData,[eleName]:value});
  }

  const submitHandler=async(e)=>{
    e.preventDefault();
    if(!formData.email || !formData.password){
      alert("email and password is required");
      return;
    }
   try {
    setLaoding(true);
     const url = import.meta.env.VITE_SERVER_URL;
     const res = await fetch(`${url}/auth/login`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify(formData),
     })
     const data=await res.json();
     console.log(data,"check access token");


     if(!data.success){
      console.log(data.error);
      return alert(data.error);
     }

     if(data.data.user.role !== "admin"){
      alert("you are not admin  ");
      return;
     }

     const token=data.data.accesstoken;
     const refToken=data.data.refreshtoken;

     localStorage.setItem("token",token);
     localStorage.setItem("refToken",refToken)

     window.location.href="/"

   } catch (error) {
    console.log("error:",error);
   }finally{
    setLaoding(false);
   }
  }
  {loading?"Loading...":"Data fetched"}

  useEffect(()=>{
     if(localStorage.getItem("token")){
      window.location.href="/";
     }
  },[])


  return (
    <div className={style.Login_container}>
      <form className={style.Form_content} onSubmit={submitHandler}>
        <h1>Login</h1>
        <label htmlFor="email" className={style.label}>
          Email
        </label>
        <input
          value={formData.email}
          name="email"
          onChange={inputHandler}
          type="email"
          placeholder="Enter Email"
        />
        <label htmlFor="password" className={style.label}>
          Password
        </label>
        <input
          value={formData.password}
          name="password"
          onChange={inputHandler}
          type="password"
          placeholder="Enter Password"
        />
        <button >Sign in</button>
      </form>
    </div>
  );
}

export default Login;