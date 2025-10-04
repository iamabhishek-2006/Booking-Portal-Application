import React from 'react'
import style from "../styles/Navbar.module.css"
import {LogOut, Search} from "lucide-react"

const Navbar = () => {
  return (
    <div className={style.Nav}>
      <div className={style.Image_content}>
        {/* <img src="../../public/flightImage.png" alt="flight" /> */}
        <img src="public/flightImage.png" alt="flight" />

        <h1>Airways</h1>
      </div>

      <div className={style.Search_input}>
        <input type="text" placeholder="Search the Flight" />
        <button>
          <Search />
        </button>
      </div>
      <div className={style.Nav_logOut}>
        <button>
          Log Out
          <LogOut />
        </button>
      </div>
    </div>
  );
}

export default Navbar;