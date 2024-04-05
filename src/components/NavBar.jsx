import { NavLink } from "react-router-dom";
function NavBar() {
  return (
    <div>
      <NavLink to="/signup">Sign up</NavLink>
      <NavLink to="/login">Log in</NavLink>
    </div>
  );
}

export default NavBar;
