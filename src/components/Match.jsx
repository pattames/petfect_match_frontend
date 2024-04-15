import PreferencesForm from "./PreferencesForm";
import Swipeable from "./Swipeable";
import styles from "../css/Match.module.css";

function Match() {
  return (
    <>
      <div className={styles.main_container}>
        <div className={styles.title}>
          <img className={styles.img} src="/instpic.jpg" alt="" />
        </div>
        <div className={styles.instructions_box}>
          <div className={styles.instructions_title}> Instructions</div>
          <div className={styles.instructions_sentence}>
            Unleash your inner animal lover by clicking on all the pet types
            first
          </div>
          <div className={styles.instructions_sentence}>
            Select your pet preferences (age, size and gender) and be ready to
            meet your new furry BFF!
          </div>
          <div className={styles.instructions_sentence}>
            Looking for endless snuggles or a playful adventure buddy? Scroll
            with the buttons and discover...
          </div>
          <h2 className={styles.instructions_match}>
            ...if it's a PetFect Match!
          </h2>
        </div>
      </div>
      <div className={styles.container}>
        <PreferencesForm />
        <Swipeable />
      </div>
    </>
  );
}

export default Match;
