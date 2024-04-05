import Styles from "../css/Navbar.module.css";

import { NavLink } from "react-router-dom";
function NavBar() {
  return (
    <nav>
      <div className={`${Styles.container}`}>
        <div className={`${Styles.logoContainer}`}>Logo image</div>
        <div>
          <div className={`${Styles.navLink}`}>About us</div>
          <NavLink className={`${Styles.navLink}`} to="/signup">
            Sign up
          </NavLink>
          <NavLink className={`${Styles.navLink}`} to="/login">
            Log in
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
