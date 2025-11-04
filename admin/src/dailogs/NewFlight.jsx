import { Plus } from 'lucide-react'
import Styles from "../styles/flight.module.css";
import { useState } from 'react';

const NewFlight = ({airPortD}) => {
    const[open,setOpen]=useState(false);
    const onClose=()=>{
        setOpen(false)
    }
  return (
        <div>
            <button onClick={()=>setOpen(true)} className={Styles.NavButton} >Add <Plus/></button>
            {open && <Dailog onClose={onClose} airPortD={airPortD}/>}
        </div>
  )
}

const Dailog=({onClose,airPortD})=>{
    const [formData,setFormData]=useState({
        airline:"",
        flightNumber:"",  
        arrival:"",
        departure:"",
        arrivalTime:"",
        departureTime:"",
        date:"",
        seats:"180",
        availableSeats:"",
        price:"",
        airport:""
    });

    const handleSubmit=async()=>{
      try {
      const url=import.meta.env.VITE_SERVER_URL;
      const res=await fetch(`${url}/admin/flight`,{
        method:"POST",
        headers:{
          "Content-Type": "application/json",
          Authorization:`Bearer ${localStorage.getItem("token")}`
        },
        body:JSON.stringify(formData)
      });
      const data=await res.json();
      if(!data.success){
        console.log(data,"random");
        alert(data.error || "something went wrong ");
        return;
      }
      setFormData({
        airline: "",
        flightNumber: "",
        arrival: "",
        departure: "",
        arrivalTime: "",
        departureTime: "",
        date: "",
        seats: "",
        availableSeats: "",
        price: "",
        airport: "",
      });
      onClose();
      airPortD(data.data);
      } catch (error) {
      console.log(error);
      }
    }

    const handleChange=(e)=>{
      setFormData({...formData,[e.target.name]:e.target.value})
    }

    return (
      <div className={Styles.flight_back_drop}>
        <div className={Styles.flight_form}>
          <div className={Styles.flight_hading}>
            <h1 className={Styles.Dailog_Heading}>Add Flight</h1>
            <button onClick={onClose}>X</button>
          </div>
          <hr />
          <div className={Styles.InputFields}>
            <InputFields
              value={formData.airline}
              name="airline"
              label="Add New Flight"
              type="text"
              placeholder="Enter New Flight"
              update={setFormData}
            />
            <InputFields
              value={formData.flightNumber}
              name="flightNumber"
              label="Enter FlighNumber"
              placeholder="Enter flight Number"
              update={setFormData}
            />
            <div className={Styles.InputBoxs}>
              <InputFields
                value={formData.seats}
                name="seats"
                label="Total seats"
                placeholder="Enter Total seats"
                update={setFormData}
              />
              <InputFields
                value={formData.availableSeats}
                name="availableSeats"
                label="isAvailabe seats"
                placeholder="Enter Total seats"
                update={setFormData}
              />
            </div>
            <InputFields
              value={formData.arrival}
              name="arrival"
              label="Arrival Flight"
              placeholder="Arrival Flight"
              update={setFormData}
            />
            <InputFields
              value={formData.departure}
              name="departure"
              label="Departure Flight"
              placeholder="Departure Flight"
              update={setFormData}
            />
            <InputFields
              value={formData.arrivalTime}
              type="datetime-local"
              name="arrivalTime"
              label="Arrival Time"
              placeholder="DD-MM-YY HH:MM"
              update={setFormData}
            />
            <InputFields
              value={formData.departureTime}
              type="datetime-local"
              name="departureTime"
              label="departue Time"
              placeholder="DD-MM-YY HH:MM"
              update={setFormData}
            />
            <InputFields
              value={formData.price}
              name="price"
              label="Price"
              placeholder="Enter Price"
              update={setFormData}
            />
            <InputFields
              value={formData.date}
              type="datetime-local"
              name="date"
              label="date"
              placeholder="DD-MM-YY HH:MM"
              update={setFormData}
            />
            <div className={Styles.selectCategory}>
              <label htmlFor="" className={Styles.Airport_header}>AirPorts</label>
              <select
                name="airport"
                value={formData.airport}
                onChange={handleChange}
                className={Styles.inputBox}
              >
                <option value="">Select airport</option>
                {airPortD.map((airPorts) => (
                  <option key={airPorts._id} value={airPorts._id}>
                    {airPorts.airport_Name}
                  </option>
                ))}
              </select>
              <button onClick={handleSubmit} className={Styles.dailogSubmitbtn}>Add</button>
            </div>
          </div>
        </div>
      </div>
    );
}

const InputFields=({label,type,placeholder,value,update,name})=>{
  return( 
     <div >
            <div className={Styles.text_design}>{label}</div>
            <InputBox
            type={type}
            placeholder={placeholder}
            value={value}
            update={update}
            name={name}
            />
        </div>
  );
}

const InputBox=({type,placeholder,value,update,name})=>{
    return (
      <div>
        <input
          className={Styles.inputBox}
          type={type}
          placeholder={placeholder}
          value={value}
          name={name}
          onChange={(e) =>
            update((prev) => ({ ...prev, [e.target.name]: e.target.value }))
          }
        />
      </div>
    );
}

export default NewFlight;