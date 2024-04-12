import styles from "../css/Preferences.module.css";
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
      <h1>Preferences</h1>
      <form action="">
        <div>
          <h2>Age:</h2>
          <div onClick={() => setAge("newborn")}>
            <label htmlFor="newborn-checkbox">Newborn</label>
            <input id="newborn-checkbox" type="radio" name="age" />
          </div>
          <div onClick={() => setAge("young")}>
            <label htmlFor="young-checkbox">Young</label>
            <input id="young-checkbox" type="radio" name="age" />
          </div>
          <div onClick={() => setAge("adult")}>
            <label htmlFor="adult-checkbox">Adult</label>
            <input id="adult-checkbox" type="radio" name="age" />
          </div>
          <div onClick={() => setAge("senior")}>
            <label htmlFor="senior-checkbox">Senior</label>
            <input id="senior-checkbox" type="radio" name="age" />
          </div>
        </div>
        <div>
          <h2>Size:</h2>
          <div onClick={() => setSize("small")}>
            <label htmlFor="small-checkbox">Small</label>
            <input id="small-checkbox" type="radio" name="size" />
          </div>
          <div onClick={() => setSize("medium")}>
            <label htmlFor="medium-checkbox">Medium</label>
            <input id="medium-checkbox" type="radio" name="size" />
          </div>
          <div onClick={() => setSize("large")}>
            <label htmlFor="large-checkbox">Large</label>
            <input id="large-checkbox" type="radio" name="size" />
          </div>
        </div>
        <div>
          <h2>Gender:</h2>
          <div onClick={() => setGender("female")}>
            <label htmlFor="female-checkbox">Female</label>
            <input id="female-checkbox" type="radio" name="genre" />
          </div>
          <div onClick={() => setGender("male")}>
            <label htmlFor="male-checkbox">Male</label>
            <input id="male-checkbox" type="radio" name="genre" />
          </div>
        </div>
      </form>
    </>
  );
}
