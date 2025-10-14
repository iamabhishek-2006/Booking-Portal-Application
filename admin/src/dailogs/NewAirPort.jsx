import React, { useState } from 'react'
import styles from '../styles/airport.module.css';
import { Plus } from 'lucide-react';

const NewAirPort = ({add}) => {
    const [open,setOpen]=useState(false);

    const onClose=()=>{
      setOpen(false);
    }

  return (
    <div>
        <button onClick={()=>{setOpen(true)}} className={styles.nav_button} >Add <Plus/></button>
        <Dailog open={open} add={add} onClose={onClose} />
    </div>
  )
}

const Dailog=({open,onClose,add})=>{
  const [loading,setLoading]=useState(false);
  const [input, setInput] = useState({
    airport_Code: "",
    airport_Name: "",
    city: "",
    country: "",
  });

  // long method & alternative method
  // const inputSubmit=(e)=>{
  //     eleName=e.target.name,
  //     value=e.target.value,
  //     setInput({...input,[eleName]:value})
  // }

  const inputSubmit = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const DailogDataSubmit = async () => {
    try {
      setLoading(true);
      const url = import.meta.env.VITE_SERVER_URL;
      const res = await fetch(`${url}/admin/airport`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(input),
      });
      const data = await res.json();
      if (!data.success) {
        alert(data.error || "Something went wrong ");
        return;
      }
      add(data.data);
      setInput({
        airport_Code: "",
        airport_Name: "",
        city: "",
        country: "",
      });
      onClose();
    } catch (error) {
      console.log(error);
    } finally{
      setLoading(false);
    }
  };

  return (
    <div className={`${open ? styles.Dailog : styles.Dailog_content}`}>
      <div className={styles.Dailog_form}>
        <h2>New AirPorts</h2>
        <button onClick={onClose} className={styles.Dailog_button}>
          X
        </button>
        <div className={styles.Dailog_inputs}>
          <label htmlFor="">AirPort</label>
          <input
            value={input.airport_Code}
            name="airport_Code"
            onChange={inputSubmit}
            type="text"
            placeholder="Add New AirPort"
          />
          <label htmlFor="">Airport code</label>
          <input
            value={input.airport_Name}
            name="airport_Name"
            onChange={inputSubmit}
            type="text"
            placeholder="Enter Airport code"
          />
          <label htmlFor="">City</label>
          <input
            value={input.city}
            onChange={inputSubmit}
            name="city"
            type="text"
            placeholder="Enter City"
          />
          <label htmlFor="">Country</label>
          <input
            value={input.country}
            onChange={inputSubmit}
            name="country"
            type="text"
            placeholder="Enter Country"
          />
          <button
            disabled={!input || loading}
            onClick={DailogDataSubmit}
            className={`${styles.DailogSubmitBtn } ${!input && styles.DiabledBtn} ${loading && styles.loading}`}
          >
            {loading ? "creating" : "create"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewAirPort;
