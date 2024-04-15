import styles from "../css/PreferencesForm.module.css";
import { useContext, useEffect } from "react";
import { PreferencesContext } from "../context/PreferencesContext";

//if the user clicks on yep, and the pet meets the selected criteria, then it's a match

//A way to compare preferences selection to pet characteristics

export default function PreferencesForm() {
  const { age, setAge, size, setSize, gender, setGender } =
    useContext(PreferencesContext);

  // console.log(age, size, gender);

  return (
    <>
      <form className={styles.container}>
        <h1 className={styles.title}>Preferences</h1>
        <h2 className={styles.categories}>Age</h2>
        <div className={styles.age}>
          <div className={styles.age_btn} onClick={() => setAge("newborn")}>
            <label htmlFor="newborn-checkbox">Newborn</label>
            <input id="newborn-checkbox" type="radio" name="age" />
          </div>
          <div className={styles.age_btn} onClick={() => setAge("young")}>
            <label htmlFor="young-checkbox">Young</label>
            <input id="young-checkbox" type="radio" name="age" />
          </div>
          <div className={styles.age_btn} onClick={() => setAge("adult")}>
            <label htmlFor="adult-checkbox">Adult</label>
            <input id="adult-checkbox" type="radio" name="age" />
          </div>
          <div className={styles.age_btn} onClick={() => setAge("senior")}>
            <label htmlFor="senior-checkbox">Senior</label>
            <input id="senior-checkbox" type="radio" name="age" />
          </div>
        </div>
        <h2 className={styles.categories}>Size</h2>
        <div className={styles.size}>
          <div className={styles.size_btn} onClick={() => setSize("small")}>
            <label htmlFor="small-checkbox">Small</label>
            <input id="small-checkbox" type="radio" name="size" />
          </div>
          <div className={styles.size_btn} onClick={() => setSize("medium")}>
            <label htmlFor="medium-checkbox">Medium</label>
            <input id="medium-checkbox" type="radio" name="size" />
          </div>
          <div className={styles.size_btn} onClick={() => setSize("large")}>
            <label htmlFor="large-checkbox">Large</label>
            <input id="large-checkbox" type="radio" name="size" />
          </div>
        </div>
        <h2 className={styles.categories}>Gender</h2>
        <div className={styles.gender}>
          <div
            className={styles.gender_btn}
            onClick={() => setGender("female")}
          >
            <label htmlFor="female-checkbox">Female</label>
            <input id="female-checkbox" type="radio" name="genre" />
          </div>
          <div className={styles.gender_btn} onClick={() => setGender("male")}>
            <label htmlFor="male-checkbox">Male</label>
            <input id="male-checkbox" type="radio" name="genre" />
          </div>
        </div>
      </form>
    </>
  );
}
