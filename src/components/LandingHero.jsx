import styles from "../css/LandingHero.module.css";
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
            <a className={styles.link}>
              <img src="/dog_button.png" className={styles.petIcons}></img>Adopt
              me
            </a>
          </div>
          <div className={styles.buttonWrapper}>
            <a className={styles.link}>
              <img src="/cat_button.png" className={styles.petIcons}></img>
              Rehome me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
