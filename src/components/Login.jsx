import Styles from "./Login.module.css";
export default function Login() {
  return (
    <div className={`${Styles.main}`}>
      <div className={`${Styles.container}`}>
        <div className={`${Styles.left}`}>
          <form className={`${Styles.form}`}>
            <div className={`${Styles.inputBlock}`}>
              <input className={`${Styles.input}`} type="text" />
              <label htmlFor="email">Email</label>
            </div>
            <div className={`${Styles.inputBlock}`}>
              <input className={`${Styles.input}`} type="password" />
              <label htmlFor="email">Password</label>
            </div>
            <div className={`${Styles.inputBlock}`}>
              <span className={`${Styles.forgot}`}>
                <a href="#">Forgot Password?</a>
              </span>
              <button>Log in</button>
            </div>
          </form>
        </div>
        <div className={`${Styles.right}`}></div>
        <div className={`${Styles.img}`}></div>
      </div>
    </div>
  );
}
