import { Trash } from 'lucide-react'
import React, { useState } from 'react'
import styles from "../styles/airport.module.css";

export const DeleteAirPort = ({deleteD,id}) => {
    const [open,setOpen]=useState(false);

    const onClose=()=>{
      setOpen(false)
    }

  return (
    <div>
       <Trash onClick={() => setOpen(true)} className={styles.Trash} />
      <Dailog open={open} close={onClose} id={id} deleteD={deleteD} /> 
    </div>
  );
}


const Dailog=({open,close,id,deleteD})=>{
    const handleDelete=async()=>{
    try {
        const url = import.meta.env.VITE_SERVER_URL;
        const res = await fetch(`${url}/admin/airport/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const data = await res.json();
        if (!data.success) {
          alert( data.error || "something went wrong");
          console.log(data.error || "something went wrong");
        }
        deleteD(id)
        close();  
    } catch (error) {
      console.log(error);
    }
    }

    return (
      <div className={`${open ? styles.Dailog : styles.Dailog_content}`}>
        <div className={styles.DeleteDailogForm}>
          <button onClick={close} className={styles.Dailog_button}>
            X
          </button>
          <div className={styles.nav}>
            <h3>Are you sure you want to delete this airport</h3>
            <div className={styles.buttons}>
              <button onClick={close}>Cancel</button>
              <button onClick={handleDelete} >Delete</button>
            </div>
          </div>
        </div>
      // </div>
    );
}
