import styles from "../css/LandingTipsModule.module.css";
import { Link } from "react-router-dom";

export default function LandingTipsModule() {
  return (
    <div className={styles.Container}>
      <div className={styles.ContainerLeft}>
        <h2 className={styles.headline}>
          Not sure what to do before adopting?
        </h2>
        <p className={styles.subheadline}>Check out our tips and tricks page</p>
        <div className={styles.buttonWrapper}>
          <Link to="/tips-and-tricks">
            <button to="" className={styles.button}>
              Read more
            </button>
          </Link>
        </div>
      </div>

      <div className={styles.ContainerRight}></div>
    </div>
  );
}
