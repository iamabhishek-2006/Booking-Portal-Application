import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import styles from "../styles/users.module.css"

const Users = () => {
  const [users,setUsers]=useState([]);
  const [loading,setLoading]=useState(false);

  useEffect(()=>{
    const fetchData=async()=>{
      try {
         setLoading(true);
         const url = import.meta.env.VITE_SERVER_URL;
         const res = await fetch(`${url}/admin/users`, {
           method: "GET",
           headers: {
             "Content-Type": "application/json",
             Authorization: `Bearer ${localStorage.getItem("token")}`,
           },
         });
         const data = await res.json();
         setUsers(data.data);
      } catch (error) {
        console.log(error);
      }finally{
        setLoading(false);
      }
    }
    fetchData();
  },[])

  return (
    <Layout>
      <div >
        {!users.length !== 0 && (
          <table>
              <div className={styles.Loader} >{!users.length && loading && <hp>Loading...</hp>}</div>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>email</th>
                  <th>Role</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user._id}>
                    <td>{user.name}</td>
                    <td>{user.phone}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
      </div>
    </Layout>
  );
}

export default Users