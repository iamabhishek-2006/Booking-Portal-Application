import { SquarePen } from 'lucide-react'
import React, { useState } from 'react'
import styles from "../styles/airport.module.css";

const EditAirPort = ({item,id,edit}) => {
  const [open,setOpen]=useState(false);

      const onClose = () => {
        setOpen(false);
      };

  return (
    <div>
      <SquarePen onClick={()=>setOpen(true)} />
      <Dailog close={onClose} open={open} item={item} id={id} editData={edit} />
    </div>
  )
}

const Dailog=({close,open,item,editData,id})=>{

  const [formData,setformData]=useState({...item});
  const [loading,setLoading]=useState(false)

  const inputSubmit = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEditAirPort=async()=>{
    try {
    setLoading(true)
    const url=import.meta.env.VITE_SERVER_URL;
    const res=await fetch(`${url}/admin/airport/${id}`,{
      method:"PUT",
      headers:{
        "Content-Type":"application/json",
        Authorization:` Bearer ${localStorage.getItem("token")} `
      },
      body:JSON.stringify(formData)
    })
    const data=await res.json();
    if(!data.success){
      alert(data.error || "something went wrong ");
      console.log(data.error || "check console error");
    }
    editData(id,data.data)
    close()

    } catch (error) {
    console.log(error);
    }finally{
      setLoading(false)
    }
  }

  return (
    <div className={`${open ? styles.Dailog : styles.Dailog_content}`}>
      <div className={styles.Dailog_form}>
        <h2>Edit AirPort</h2>
        <button onClick={close} className={styles.Dailog_button}>
          X
        </button>
        <div className={styles.Dailog_inputs}>
          <label htmlFor="">AirPort Code</label>
          <input
            value={formData.airport_Code}
            name="airport_Code"
            onChange={inputSubmit}
            type="text"
            placeholder="Add New AirPort"
          />
          <label htmlFor="">Airport Name</label>
          <input
            value={formData.airport_Name}
            name="airport_Name"
            onChange={inputSubmit}
            type="text"
            placeholder="Enter Airport code"
          />
          <label htmlFor="">City</label>
          <input
            value={formData.city}
            onChange={inputSubmit}
            name="city"
            type="text"
            placeholder="Enter City"
          />
          <label htmlFor="">Country</label>
          <input
            value={formData.country}
            onChange={inputSubmit}
            name="country"
            type="text"
            placeholder="Enter Country"
          />
          <button className={styles.DailogSubmitBtn} onClick={handleEditAirPort}> {loading?"Editing":"Edit"}</button>
        </div>
      </div>
    </div>
  );  
}

export default EditAirPort;