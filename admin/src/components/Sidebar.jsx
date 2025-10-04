import React from 'react'
import style from "../styles/sidebar.module.css";
import {  Link } from 'lucide-react';


const Sidebar = () => {
  return (
      <div className={style.Sidebar_content}>
        <div>
          <Link to="/"> Home</Link>
        </div>
      </div>
  );
}

export default Sidebar;

