import styles from "../css/AboutUs.module.css";

function AboutUs() {
  return (
    <>
      <h1 className={styles.heading}>Meet the Development Team</h1>
      <div className={styles.gridContainer}>
        <div className={styles.gridItem}>
          <div className={styles.imgContainer}>
            <img src="marco.jpeg" alt="marco" className={styles.image} />
          </div>
          <h2 className={styles.title}>Marco</h2>
        </div>
        <div className={styles.gridItem}>
          <div className={styles.imgContainer}>
            <img src="Niloufar.jpeg" alt="Niloufar" className={styles.image} />
          </div>
          <h2 className={styles.title}>Niloufar</h2>
        </div>
        <div className={styles.gridItem}>
          <div className={styles.imgContainer}>
            <img src="Andrea.JPG" alt="Andrea" className={styles.image} />
          </div>
          <h2 className={styles.title}>Andrea</h2>
        </div>
        <div className={styles.gridItem}>
          <div className={styles.imgContainer}>
            <img src="patricio.jpg" alt="patricio" className={styles.image} />
          </div>
          <h2 className={styles.title}>Patricio</h2>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
