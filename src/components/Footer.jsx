import styles from "../css/Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTelegram,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className={styles.container}>
      <img src="/logo.png" className={styles.logo}></img>
      <ul className={styles.list}>
        <a>
          <li>About us ||</li>
        </a>
        <li>petfectmatch@contact.com</li>
      </ul>
      <div className={styles.logoContainer}>
        <FontAwesomeIcon
          icon={faInstagram}
          size="2xl"
          style={{ color: "#b45c51" }}
        />
        <FontAwesomeIcon
          icon={faTelegram}
          size="2xl"
          style={{ color: "#b45c51" }}
        />
        <FontAwesomeIcon
          icon={faSquareXTwitter}
          size="2xl"
          style={{ color: "#b45c51" }}
        />
      </div>
    </div>
  );
}
