import styles from "../css/LandingHero.module.css";
import { Link } from "react-router-dom";

export default function LandingHero() {
  return (
    <div className={styles.container}>
      <div className={styles.leftpart}></div>
      <div className={styles.rightpart}>
        <div className={styles.headingWrapper}>
          <h1 className={styles.heading}>
            Your new best friend is just one
            <span className={styles.swipe}> swipe</span> away
          </h1>
        </div>
        <div className={styles.buttons}>
          <div className={styles.buttonWrapper}>
            <Link to="/match">
              <div className={styles.link}>
                <img src="/dog_button.png" className={styles.petIcons}></img>
                Adopt me
              </div>
            </Link>
          </div>
          <div className={styles.buttonWrapper}>
            <Link className={styles.link_to} to="/dashboard">
              <div className={styles.link}>
                <img src="/cat_button.png" className={styles.petIcons}></img>
                Rehome me
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
