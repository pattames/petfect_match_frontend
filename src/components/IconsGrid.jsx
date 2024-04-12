import styles from "../css/IconsGrid.module.css";

export default function IconsGrid() {
  return (
    <div className={styles.gridContainer}>
      <div className={styles.gridItem}>
        <img src="/dog_icon.svg" className={styles.image}></img>
      </div>
      <div className={styles.gridItem}>
        <img src="/cat_icon.svg" className={styles.image}></img>
      </div>
      <div className={styles.gridItem}>
        <img src="/hand_icon.svg" className={styles.image}></img>
      </div>
      <div className={styles.gridItem}>
        <img src="/money_icon.svg" className={styles.image}></img>
      </div>
      <div className={styles.gridItem} className={styles.subtitle}>
        I'd like to adopt a dog
      </div>
      <div className={styles.gridItem} className={styles.subtitle}>
        I am more of a cat person
      </div>
      <div className={styles.gridItem} className={styles.subtitle}>
        I am interested in volunteering{" "}
      </div>
      <div className={styles.gridItem} className={styles.subtitle}>
        I'd like to save a life
      </div>
    </div>
  );
}
