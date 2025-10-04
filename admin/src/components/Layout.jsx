import React from 'react'
import Navbar from './Navbar';
import style from "../styles/layout.module.css"
import Sidebar from './Sidebar';

const Layout = ({children}) => {
  return (
    <div>
        <Navbar/>
        <div className={style.Layout}><Sidebar/>{children}</div>
    </div>
  )
}
export default Layout;