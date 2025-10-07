import React from 'react'
import style from "../styles/sidebar.module.css";
import { Link } from 'react-router-dom';
import { Building, Home, Plane, UserCheck, Users } from 'lucide-react';


const Sidebar = () => {
  return (
    <div className={style.Sidebar_content}>
      <div className={style.SidebarLink}>
        <SidebarLinks icon={Home} link="/" label="Home" />
        <SidebarLinks icon={Plane} link="/flights" label="Flights" />
        <SidebarLinks icon={Building} link="/airport" label="AirPorts" />
        <SidebarLinks icon={Users} link="/users" label="Users" />
        <SidebarLinks icon={UserCheck} link="/passengers" label="Passengers" />
      </div>
    </div>
  );
}

const SidebarLinks=({link,label,icon})=>{
  const Icon=icon;
  return(
    <Link to={link} className={style.Sidebar_Comp}> <Icon/> {label}  </Link>
  )
}

export default Sidebar;

