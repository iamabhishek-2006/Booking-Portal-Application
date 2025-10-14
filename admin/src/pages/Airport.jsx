import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import styles from "../styles/airport.module.css";
import NewAirPort from "../dailogs/NewAirPort";
import  {DeleteAirPort}  from "../dailogs/DeleteAirPort";
import EditAirPort from "../dailogs/EditAirPort"

const Airport = () => {
  const [data, setData] = useState([]);

  const addAirPort = (NewAirPort) => {
    setData([...data, NewAirPort]);
  };

  const updateAirPort=(id,newData)=>{
    setData(data.map((item)=>{
      if(item._id !==id){
        return {
          ...item,newData
        }
      }
      return item,newData;
    }))
  }


  const AirPortDataDelete=(id)=>{
    setData(data.filter((item)=>item._id !== id));
  }


  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = import.meta.env.VITE_SERVER_URL;
        const res = await fetch(`${url}/admin/airport`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const data = await res.json();
        if (!data.success) {
          alert(data.error || "something went wrong");
        }
        setData(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Layout>
      <div className={styles.body}>
        <div className={styles.AirPort_nav}>
          <h1>AirPorts</h1>
          <NewAirPort add={addAirPort} />
        </div>
        <div className={styles.table_header}>
          <table>
            <thead>
              <tr>
                <th>AirPort Name</th>
                <th>AirPort code</th>
                <th>City</th>
                <th>Country</th>
                <th>Actions</th>
                <th>Total flights</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item._id}>
                  <td>{item.airport_Code}</td>
                  <td>{item.airport_Name}</td>
                  <td>{item.city}</td>
                  <td>{item.country}</td>
                  <td>
                    <div className={styles.Icons}>
                      <EditAirPort id={item._id} item={item} edit={updateAirPort}  />
                      <DeleteAirPort
                        deleteD={AirPortDataDelete}   id={item._id}  />
                    </div>
                  </td>
                        <td>{item.total || 0}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default Airport;
