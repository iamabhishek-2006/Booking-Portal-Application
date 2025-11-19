import React from 'react'
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";


const Dashboard = ({allData}) => {
  const colors = ["#FFA500", "#008000", "#FF0000"];
  return (
    
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
  )
}

export default Dashboard;