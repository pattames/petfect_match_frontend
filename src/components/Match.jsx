import PreferencesForm from "./PreferencesForm";
import Swipeable from "./Swipeable";
import styles from "../css/Match.module.css";

function Match() {
  return (
    <div className={styles.container}>
      <PreferencesForm />
      <Swipeable />
    </div>
  );
}

export default Match;
