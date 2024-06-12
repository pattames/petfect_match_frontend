import Styles from "../css/Navbar.module.css";

import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { ChoiceContext } from "../context/ChoiceContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  const { user, setUser } = useContext(UserContext);
  const { setAdopt, setRehome } = useContext(ChoiceContext);

  const handleClick = () => {
    localStorage.removeItem("user");
    setUser(null);
    setAdopt(false);
    setRehome(false);
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
          <NavLink className={`${Styles.navLink}`} to="/aboutUs">
            <p className={`${Styles.navItem}`}>About us</p>
          </NavLink>
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
          <NavLink className={`${Styles.navLink}`} to="/aboutUs">
            About us
          </NavLink>
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
