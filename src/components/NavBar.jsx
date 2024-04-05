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
    <div>
      <NavLink to="/">Home</NavLink>
      {user !== null && (
        <div>
          <span>{user.email}</span>{" "}
          <button onClick={handleClick}>Log out</button>
        </div>
      )}
      {user === null && (
        <div>
          <NavLink to="/signup">Sign up</NavLink>
          <NavLink to="/login">Log in</NavLink>
        </div>
      )}
    </div>
  );
}

export default NavBar;
