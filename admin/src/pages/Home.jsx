import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import styles from "../styles/dashboard.module.css";
import Dashboard from "../components/Dashboard";
import { Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { withAuth } from "../components/withAuth";

const Home = () => {
  const [data, setData] = useState([]);
  const [airPort, setAirPort] = useState([]);
  const [users, setUsers] = useState([]);
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = import.meta.env.VITE_SERVER_URL;
      const res = await fetch(`${url}/admin/flight`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await res.json();
      setData(data.data);

      const res2 = await fetch(`${url}/admin/airport`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data2 = await res2.json();
      setAirPort(data2.data);

      const res3 = await fetch(`${url}/admin/users`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data3 = await res3.json();
      setUsers(data3.data);

      if (data && data2 && data3) {
        setAllData([
          { name: "Flight", value: data.data.length },
          { name: "Airport", value: data2.data.length },
          { name: "Users", value: data3.data.length },
        ]);
      } else {
        console.log("Data not found in home");
      }
    };
    fetchData();
  }, []);

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.box}>
            <Link className={styles.Link} to="/flights">
              <div className={styles.cards_data}>
                <h3>Total Flights</h3>
                <h1>{data.length}</h1>
              </div>
            </Link>
          </div>
          <div className={styles.box}>
            <Link className={styles.Link} to="/airport">
              <div className={styles.cards_data}>
                <h3>Total AirPorts</h3>
                <h1>{airPort.length}</h1>
              </div>
            </Link>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.box}>
            <Link className={styles.Link} to="/users">
              <div className={styles.cards_data}>
                <h3>Total Users</h3>
                <h1>{users.length}</h1>
              </div>
            </Link>
          </div>
          <div className={styles.box}>
            <Link className={styles.Link} to="/passengers">
              <div className={styles.cards_data}>
                <h2>Total Passenger</h2>
              </div>
            </Link>
          </div>
        </div>
        <div className={styles.recart_card}>
          <div className={styles.flightImage}>
            <img src="flightrun.png" alt="flightImage" />
          </div>
          <div className={styles.cloudes}>
            <img src="cloudImage.png" alt="cloudImage" />
            <img className={styles.cloudImage2} src="cloudImage.png" />
            <img
              className={styles.cloudImage2}
              src="cloudImage.png"
              alt="cloudImage"
            />
          </div>
        </div>
        <div className={styles.rechart_box}>
          <Dashboard allData={allData} />
        </div>
      </div>
    </Layout>
  );
};

export default withAuth(Home);
