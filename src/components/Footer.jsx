import styles from "../css/Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTelegram,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className={styles.container}>
      <Link to="/">
        <img src="/logo.png" className={styles.logo}></img>
      </Link>
      <ul className={styles.list}>
        <Link to="/aboutUs">
          <li>About us ||</li>
        </Link>
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
