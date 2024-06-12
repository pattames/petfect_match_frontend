import PreferencesForm from "./PreferencesForm";
import Swipeable from "./Swipeable";
import styles from "../css/Match.module.css";

function Match() {
  return (
    <>
      <div className={styles.main_container}>
        <img className={styles.img} src="/instpic.jpg" alt="" />
        <div className={styles.instructions_box}>
          <div className={styles.instructions_title}>
            {" "}
            How to find your petfect friend:
          </div>
          <div className={styles.instructions_sentence}>
            1) Unleash your inner animal lover by selecting your pet preferences
            (age, size and gender).
          </div>
          <div className={styles.instructions_sentence}>
            2) Click on the pet type your interested in (dogs, cats, others) and
            be ready to meet your new furry BFF!
          </div>
          <div className={styles.instructions_sentence}>
            3){" "}
            {/* Looking for endless snuggles or a playful adventure buddy? */}
            Swipe the cards and discover...{" "}
            <span className={styles.instructions_match}>
              if it's a PetFect Match!
            </span>
          </div>
          <div className={styles.instructions_sentence}>
            4) Contact the owner!
          </div>
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
