import { useState, useContext } from "react";
import Styles from "../css/Login.module.css";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export default function Login() {
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
      "https://purrfect-backend-hsd1.onrender.com/user/login",
      // "http://localhost:8080/user/login",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      }
    );

    const data = await response.json();
    if (!response.ok) {
      console.log("Response was NOT ok");

      setLoading(false); //stop loading
      setError(data.error);
    }
    //Check if response is ok, we can put it in localestorage
    if (response.ok) {
      console.log("Response was ok");
      localStorage.setItem("user", JSON.stringify(data));
      setUser(data);
      setLoading(false);
    }
  };

  return (
    <div className={`${Styles.main}`}>
      <div className={`${Styles.container}`}>
        <div className={`${Styles.left}`}>
          <form className={`${Styles.form}`} onSubmit={handleSubmit}>
            <h3 className={`${Styles.title}`}>Log in</h3>
            <div className={`${Styles.inputBlock}`}>
              <input
                className={`${Styles.input}`}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className={`${Styles.lbl}`} htmlFor="email">
                Email:
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
              <button className={`${Styles.btn}`}>Log in</button>
              <p className={`${Styles.p}`}>
                Don't have an account?{" "}
                <Link to="/signup">
                  <span className={`${Styles.span}`}>Sign Up</span>
                </Link>
              </p>
            </div>

            {error && <div>{error}</div>}
          </form>
        </div>
        <div className={`${Styles.right}`}></div>
        <div className={`${Styles.img}`}></div>
      </div>
    </div>
  );
}
