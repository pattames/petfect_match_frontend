import { useState, useContext } from "react";
import Styles from "../css/Login.module.css";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import DogSpinner from "./DogSpinner.jsx";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { setUser } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const response = await fetch(
      "https://purrfect-backend-hsd1.onrender.com/user/signup",
      // "http://localhost:8080/user/signup",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      }
    );

    const data = await response.json();
    if (!response.ok) {
      setLoading(false); //stop loading
      setError(data.error);
    }
    //Check if response is ok, we can put it in localestorage
    if (response.ok) {
      localStorage.setItem("user", JSON.stringify(data));
      setUser(data);
      setLoading(false);
    }
  };

  return (
    <div className={`${Styles.main}`}>
      <div className={`${Styles.container}`}>
        <div className={`${Styles.left}`}>
          {loading ? (
            <DogSpinner />
          ) : (
            <form className={`${Styles.form}`} onSubmit={handleSubmit}>
              <h3 className={`${Styles.title}`}>Sign up</h3>
              <div className={`${Styles.inputBlock}`}>
                <input
                  className={`${Styles.input}`}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label className={`${Styles.lbl}`} htmlFor="email">
                  Email
                </label>
              </div>
              <div className={`${Styles.inputBlock}`}>
                <input
                  className={`${Styles.input}`}
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label className={`${Styles.lbl}`} htmlFor="password">
                  Password
                </label>
              </div>
              <div className={`${Styles.inputBlock}`}>
                <span className={`${Styles.forgot}`}>
                  <a href="#">Forgot Password?</a>
                </span>
                <button className={`${Styles.btn}`}>Sign up</button>
                <p className={`${Styles.p}`}>
                  Already have an account?
                  <Link to="/login">
                    <span className={`${Styles.span}`}>Log in</span>
                  </Link>
                </p>
              </div>
              {error && <div className={`${Styles.errMes}`}>{error}</div>}
            </form>
          )}
        </div>
        <div className={`${Styles.right}`}></div>
        <div className={`${Styles.img}`}></div>
      </div>
    </div>
  );
}
