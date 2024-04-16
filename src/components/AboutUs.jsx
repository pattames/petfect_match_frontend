import styles from "../css/AboutUs.module.css";

function AboutUs() {
  return (
    <>
      <h1 className={styles.heading}>Meet the Development Team</h1>
      <div className={styles.gridContainer}>
        <div className={styles.gridItem}>
          <img src="image1.jpg" alt="Image 1" className={styles.image} />
          <h2 className={styles.title}>Marco</h2>
        </div>
        <div className={styles.gridItem}>
          <img src="Niloufar.jpeg" alt="Image 2" className={styles.image} />
          <h2 className={styles.title}>Niloufar</h2>
        </div>
        <div className={styles.gridItem}>
          <img src="Andrea.JPG" alt="Image 3" className={styles.image} />
          <h2 className={styles.title}>Andrea</h2>
        </div>
        <div className={styles.gridItem}>
          <img src="image4.jpg" alt="Image 4" className={styles.image} />
          <h2 className={styles.title}>Patricio</h2>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
