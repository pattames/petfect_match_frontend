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
        <h1 className={styles.title}>My Ideal Pet</h1>
        <h2 className={styles.categories}>Age</h2>
        <div className={styles.age}>
          <div className={styles.age_btn} onClick={() => setAge("newborn")}>
            <label className={styles.radio_label} htmlFor="newborn-checkbox">
              Newborn
            </label>
            <input
              className={styles.radio_btn}
              id="newborn-checkbox"
              type="radio"
              name="age"
            />
          </div>
          <div className={styles.age_btn} onClick={() => setAge("young")}>
            <label className={styles.radio_label} htmlFor="young-checkbox">
              Young
            </label>
            <input
              className={styles.radio_btn}
              id="young-checkbox"
              type="radio"
              name="age"
            />
          </div>
          <div className={styles.age_btn} onClick={() => setAge("adult")}>
            <label className={styles.radio_label} htmlFor="adult-checkbox">
              Adult
            </label>
            <input
              className={styles.radio_btn}
              id="adult-checkbox"
              type="radio"
              name="age"
            />
          </div>
          <div className={styles.age_btn} onClick={() => setAge("senior")}>
            <label className={styles.radio_label} htmlFor="senior-checkbox">
              Senior
            </label>
            <input
              className={styles.radio_btn}
              id="senior-checkbox"
              type="radio"
              name="age"
            />
          </div>
        </div>
        <h2 className={styles.categories}>Size</h2>
        <div className={styles.size}>
          <div className={styles.size_btn} onClick={() => setSize("small")}>
            <label className={styles.radio_label} htmlFor="small-checkbox">
              Small
            </label>
            <input
              className={styles.radio_btn}
              id="small-checkbox"
              type="radio"
              name="size"
            />
          </div>
          <div className={styles.size_btn} onClick={() => setSize("medium")}>
            <label className={styles.radio_label} htmlFor="medium-checkbox">
              Medium
            </label>
            <input
              className={styles.radio_btn}
              id="medium-checkbox"
              type="radio"
              name="size"
            />
          </div>
          <div className={styles.size_btn} onClick={() => setSize("large")}>
            <label className={styles.radio_label} htmlFor="large-checkbox">
              Large
            </label>
            <input
              className={styles.radio_btn}
              id="large-checkbox"
              type="radio"
              name="size"
            />
          </div>
        </div>
        <h2 className={styles.categories}>Gender</h2>
        <div className={styles.gender}>
          <div
            className={styles.gender_btn}
            onClick={() => setGender("female")}
          >
            <label className={styles.radio_label} htmlFor="female-checkbox">
              Female
            </label>
            <input
              className={styles.radio_btn}
              id="female-checkbox"
              type="radio"
              name="genre"
            />
          </div>
          <div className={styles.gender_btn} onClick={() => setGender("male")}>
            <label className={styles.radio_label} htmlFor="male-checkbox">
              Male
            </label>
            <input
              className={styles.radio_btn}
              id="male-checkbox"
              type="radio"
              name="genre"
            />
          </div>
        </div>
      </form>
    </>
  );
}
