import styles from "../css/LandingTipsModule.module.css";

export default function LandingTipsModule() {
  return (
    <div className={styles.Container}>
      <div className={styles.ContainerLeft}>
        <h2 className={styles.headline}>
          Not sure what to do before adopting?
        </h2>
        <p className={styles.subheadline}>Check out our tips and tricks page</p>
        <div className={styles.buttonWrapper}>
          <button className={styles.button}>Read more</button>
        </div>
      </div>
      <div className={styles.ContainerRight}></div>
    </div>
  );
}
