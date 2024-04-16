import styles from "../css/IconsGrid.module.css";
import { Link } from "react-router-dom";

export default function IconsGrid() {
  return (
    <div className={styles.gridContainer}>
      <Link to="/match">
        <div className={styles.gridItem}>
          <img src="/dog_icon.svg" className={styles.image}></img>
        </div>
      </Link>
      <Link to="/match">
        <div className={styles.gridItem}>
          <img src="/cat_icon.svg" className={styles.image}></img>
        </div>
      </Link>
      <Link to="/match">
        <div className={styles.gridItem}>
          <img src="/hand_icon.svg" className={styles.image}></img>
        </div>
      </Link>
      <Link to="/match">
        <div className={styles.gridItem}>
          <img src="/money_icon.svg" className={styles.image}></img>
        </div>
      </Link>
      <Link to="/match">
        <div className={styles.gridItem}>I'd like to adopt a dog</div>
      </Link>
      <Link to="/match">
        <div className={styles.gridItem}>I am more of a cat person</div>
      </Link>
      <Link to="/match">
        <div className={styles.gridItem}>I am interested in volunteering </div>
      </Link>
      <Link to="/match">
        <div className={styles.gridItem}>I'd like to save a life</div>
      </Link>
    </div>
  );
}
