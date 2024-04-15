import Styles from "../css/Navbar.module.css";

import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  const { user, setUser } = useContext(UserContext);
  // console.log("usercontext", user);
  const handleClick = () => {
    localStorage.removeItem("user");
    setUser(null);
  };
  return (
    <div className={`${Styles.container}`}>
      <NavLink to="/">
        <div className={`${Styles.logoContainer}`}>
          <img src="/logo.png" className={`${Styles.logoImage}`}></img>
        </div>
      </NavLink>
      {user !== null && (
        <div className={`${Styles.rightNav}`}>
          <NavLink className={`${Styles.navLink}`} to="/">
            <p className={`${Styles.navItem}`}>Home</p>
          </NavLink>
          <div className={`${Styles.navLink}`}>
            <p className={`${Styles.navItem}`}>About us</p>
          </div>
          <div className={`${Styles.navLink}`}>
            <button className={`${Styles.logoutbtn}`} onClick={handleClick}>
              Log out
            </button>
          </div>

          {user.image !== undefined && user.image !== "" ? (
            <NavLink className={`${Styles.navLink}`} to="/dashboard">
              <img
                className={`${Styles.userImgNav}`}
                src={user.image}
                alt="User"
              />
            </NavLink>
          ) : (
            <NavLink className={`${Styles.navLink}`} to="/dashboard">
              <FontAwesomeIcon
                className={`${Styles.userImgNav}`}
                icon={faUserCircle}
              />
            </NavLink>
          )}
        </div>
      )}
      {user === null && (
        <div className={`${Styles.rightNav}`}>
          <NavLink className={`${Styles.navLink}`} to="/">
            Home
          </NavLink>
          <div className={`${Styles.navLink}`}>About us</div>
          <NavLink className={`${Styles.navLink}`} to="/signup">
            Sign up
          </NavLink>

          <NavLink className={`${Styles.navLink}`} to="/login">
            Log in
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default NavBar;
