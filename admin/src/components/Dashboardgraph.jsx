import React from 'react'
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import styles from "../styles/dashboard.module.css";


const Dashboardgraph = ({allData}) => {
  console.log(allData,"hi random data");
  const colors = ["#FFA500", "#008000", "#FF0000"];
  return (
    <div className={styles.circular}>
    
         <ResponsiveContainer height={300}  width="100%">
            <PieChart>
            <Pie data={allData}  cx="50%" cy="50%" labelLine={false} outerRadius={120} fill='#8884d8' dataKey="value" label >
                {allData.map((entry,index)=>(
                    <Cell key={`cell-${index} `} fill={colors[index]} />
                ))}
            </Pie>
            <Tooltip/>
            <Legend/>
            </PieChart>
         </ResponsiveContainer>
     </div>
  )
}

export default Dashboardgraph;