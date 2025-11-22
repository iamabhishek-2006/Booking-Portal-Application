import style from "../styles/Navbar.module.css";
import { LogOut, Search } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refToken");
    window.href = "/login";
  };


  return (
    <div className={style.Nav}>
      <div className={style.Image_content}>
        <img
          src="/flightImage.png" alt="flight"  />
        <h1>Airways</h1>
      </div>

      <div className={style.Search_input}>
        <input type="text" placeholder="Search the Flight" />
        <button>
          <Search />
        </button>
      </div>
      <div className={style.Nav_logOut}>
        <Link className={style.Link} to="/login">
          <button onClick={logout}>
            Log Out <LogOut />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
