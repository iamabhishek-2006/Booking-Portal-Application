import { Trash } from 'lucide-react';
import React, { useState } from 'react'
import Styles from "../styles/Deleteflight.module.css"

const Deleteflight = ({ id, deleteFlightData }) => {
  const [open, setOpen] = useState(false);

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Trash onClick={() => setOpen(true)} className={Styles.Trash} />
      <Dailog open={open} onClose={onClose} id={id} deleteFlightData={deleteFlightData} />
    </div>
  );
};

const Dailog=({open,onClose,id,deleteFlightData})=>{

  const deleteFlight=async()=>{
      try {
      const url=import.meta.env.VITE_SERVER_URL;
      const res=await fetch (`${url}/admin/flight/${id}`,{
        method:"DELETE",
        headers:{
          "Content-Type":"application/json",
          Authorization:`Bearer ${localStorage.getItem("token")}`
        }
      })
      const data= await res.json();
      console.log(data);
      if(!data.success){
        alert(data.error || "something went wrong");
        console.log(data.error || "something went wrong");
      }
      deleteFlightData(id);
      onClose();
      } catch (error) {
      console.log(error);
      }
  }

    return (
      <div className={`${open ? Styles.DailogBackDrop : Styles.DailogContent}`}>
        <div onClick={onClose} className={Styles.DeleteDailogForm}>
           <div className={Styles.dailogHeading}>
            <h3>Are you sure you want to delete this flight</h3>
            <div className={Styles.button}>
              <button className={Styles.button1} onClick={onClose}>Cancel</button>
              <button onClick={deleteFlight}  className={Styles.button2}>Delete</button>
            </div>
           </div>
          </div>
        </div>
    );
}

export default Deleteflight;