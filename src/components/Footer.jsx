import styles from "../css/Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <li>Home</li>
        <li>About us</li>
        <li>Tips & Tricks</li>
      </ul>
      <img src="/logo.png" className={styles.logo}></img>
    </div>
  );
}
