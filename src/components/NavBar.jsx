import Styles from "../css/Navbar.module.css";

import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function NavBar() {
  const { user, setUser } = useContext(UserContext);

  const handleClick = () => {
    localStorage.removeItem("user");
    setUser(null);
  };
  return (
    <div className={`${Styles.container}`}>
       <div className={`${Styles.logoContainer}`}>Logo image</div>
      <NavLink to="/">Home</NavLink>
      {user !== null && (
        <div>
          <span>{user.email}</span>{" "}
          <button onClick={handleClick}>Log out</button>
        </div>
      )}
      {user === null && (
        <div>
          <NavLink className={`${Styles.navLink}`} to="/signup">Sign up</NavLink>
          <NavLink className={`${Styles.navLink}`} to="/login">Log in</NavLink>
             <div className={`${Styles.navLink}`}>About us</div>
        </div>
      )}
    </div>
  );
}

export default NavBar;
