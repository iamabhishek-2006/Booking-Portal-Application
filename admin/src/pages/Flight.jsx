import React from 'react'
import Layout from '../components/Layout'
import { useEffect } from 'react'
import { useState } from 'react'
import Styles from "../styles/flight.module.css"
import NewFlight from '../dailogs/NewFlight'
import Editflight from '../dailogs/Editflight'
import Deleteflight from '../dailogs/Deleteflight'

const Flight = () => {
  const [data,setData]=useState([]);
  const [airPort,setAirPort]=useState([]);
  const [loading,setLoading]=useState(false)


 const deleteFlight=async(id)=>{
    setData(data.filter((item)=>item._id !== id));
    setAirPort(airPort.filter((item)=>item._id !== id));
 }

//  const airPortD=(newData)=>{
//     setData([...data,newData])
//  }

    // fetch flight 
    useEffect(() => {
      const fetchData = async () => {
        try {
          setLoading(true)
          const url = import.meta.env.VITE_SERVER_URL;
          const res = await fetch(`${url}/admin/flight`, {
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
        }finally{
          setLoading(false);
        }
      };
      fetchData();
    }, []);

    // fetch airport

    useEffect(()=>{
      const fetchData2=async()=>{
        try {
          const url = import.meta.env.VITE_SERVER_URL;
          const res = await fetch(`${url}/admin/airport`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          });
          const data2 = await res.json();
          if(!data2.success ){
            alert(data2.error || "something went wrong");
          }
          setAirPort(data2.data)
        } catch (error) {
          console.log(error);
        }
      }
      fetchData2();
    },[])

  return (
    <Layout>
      <div className={Styles.flightheader}>
        <div className={Styles.flightContent}>
          <h1>Flights</h1>
          <NewFlight airPortD={airPort} />
        </div>
        <div className={Styles.loadingState}>{!data.length && loading && <h2>Loading</h2>}</div>
        {data.length !== 0 && (
          <div>
            <table className={Styles.table}>
              <thead>
                <tr>
                  <th>AirLine</th>
                  <th>Flight No</th>
                  <th>Arrival</th>
                  <th>departure</th>
                  <th>arrival Time</th>
                  <th>departure Time</th>
                  <th>Price</th>
                  <th>seats</th>
                  <th>slug</th>
                  <th>AirPort</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item._id}>
                    <td>{item.airline}</td>
                    <td>{item.flightNumber}</td>
                    <td>{item.arrival}</td>
                    <td>{item.departure}</td>
                    <td>{item.arrivalTime}</td>
                    <td>{item.departureTime}</td>
                    <td>{item.price}</td>
                    <td>{item.seats}</td>
                    <td>{item.slug}</td>
                    <td>{item.airport?.airport_Name || "-"}</td>
                    <td>
                      <div className={Styles.lucide_icons}>
                        <Editflight />
                        <Deleteflight
                          deleteFlightData={deleteFlight}
                          id={item._id}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Flight;