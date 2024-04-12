import { useState, useContext } from "react";
import Styles from "../css/Prefrences.module.css";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export default function Prefrences() {
  const { user } = useContext(UserContext);

  const [formData, setFormData] = useState({
    info: {
      location: "",
      space_available: "",
      space_type: "",
    },
    name: "",
    preferences: {
      pet_type: "",
      breed: "",
      age: "",
      size: "",
      gender: "",
    },
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //const handleChange = (e) => {
  // const { name, value } = e.target;
  //  setFormData({
  //   ...formData,
  //   [name]: value,
  // });
  // console.log(formData);
  //};
  const handleChange = (e) => {
    const { name, value } = e.target;
    const [parentKey, childKey] = name.split(".");

    if (queueMicrotask) {
      setFormData((prevState) => ({
        ...prevState,
        [parentKey]: {
          ...prevState[parentKey],
          [childKey]: value,
        },
      }));
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const response = await fetch(
      //do not forget to change the change the url
      // "https://purrfect-backend-hsd1.onrender.com/user/"
      "http://localhost:8080/user/:id",
      {
        method: "PUT",

        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify(formData),
      }
    );

    const data = await response.json();
    if (!response.ok) {
      console.log("Response was NOT ok");

      setLoading(false); //stop loading
      setError(data.error);
    }
    //Check if response is ok, we can put it in localestorage
    if (response.ok) {
      console.log("Response was ok");
      localStorage.setItem("user", JSON.stringify(data));
      setLoading(false);
      //setUser(data);
    }
  };

  return (
    <div className={`${Styles.main}`}>
      <div className={`${Styles.container}`}>
        <div className={`${Styles.left}`}>
          <form className={`${Styles.form}`} onSubmit={handleSubmit}>
            <h3 className={`${Styles.title}`}>User</h3>
            <div className={`${Styles.inputBlock}`}>
              <input
                className={`${Styles.input}`}
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <label htmlFor="name">Name: </label>
            </div>
            <div className={`${Styles.inputBlock}`}>
              <input
                className={`${Styles.input}`}
                type="text"
                name="info.location"
                value={formData.info.location}
                onChange={handleChange}
              />
              <label htmlFor="location">Location:</label>
            </div>
            <div className={`${Styles.inputBlock}`}>
              <input
                className={`${Styles.input}`}
                type="text"
                name="info.space_available"
                value={formData.info.space_available}
                onChange={handleChange}
              />
              <label htmlFor="Space">Space Available: </label>
            </div>

            <div className={`${Styles.inputBlock}`}>
              <div id="spaceType" className={`${Styles.wrapper}`}>
                <input
                  className={`${Styles.radioInput}`}
                  id="apartment"
                  type="radio"
                  name="space_type"
                  value="apartment"
                />
                <label htmlFor="apartment" className={`${Styles.radioLabel}`}>
                  <span className={`${Styles.radioInnerCircle}`}></span>
                  Apartment
                </label>
                <input
                  className={`${Styles.radioInput}`}
                  id="house"
                  type="radio"
                  name="space_type"
                  value="house"
                  onChange={handleChange}
                />
                <label htmlFor="house" className={`${Styles.radioLabel}`}>
                  <span className={`${Styles.radioInnerCircle}`}></span>
                  House
                </label>
                <input
                  className={`${Styles.radioInput}`}
                  id="studio"
                  type="radio"
                  name="space_type"
                  value="studio"
                  onChange={handleChange}
                />
                <label htmlFor="studio" className={`${Styles.radioLabel}`}>
                  <span className={`${Styles.radioInnerCircle}`}></span>
                  Studio
                </label>
              </div>
              <label htmlFor="spaceType">Space Type: </label>
            </div>
            <div className={`${Styles.inputBlock}`}>
              <input
                className={`${Styles.input}`}
                type="text"
                name="preferences.pet_type"
                value={formData.preferences.pet_type}
                onChange={handleChange}
              />
              <label htmlFor="pet_type">Pet Type: </label>
            </div>
            <div className={`${Styles.inputBlock}`}>
              <input
                className={`${Styles.input}`}
                type="text"
                name="preferences.breed"
                value={formData.preferences.breed}
                onChange={handleChange}
              />
              <label htmlFor="breed">Breed: </label>
            </div>
            <div className={`${Styles.inputBlock}`}>
              <input
                className={`${Styles.input}`}
                type="text"
                name="preferences.age"
                value={formData.preferences.age}
                onChange={handleChange}
              />
              <label htmlFor="age">Age: </label>
            </div>
            <div className={`${Styles.inputBlock}`}>
              <input
                className={`${Styles.input}`}
                type="text"
                name="preferences.gender"
                value={formData.preferences.gender}
                onChange={handleChange}
              />
              <label htmlFor="gender">Gender: </label>
            </div>
            <div className={`${Styles.inputBlock}`}>
              <input
                className={`${Styles.input}`}
                type="text"
                name="preferences.size"
                value={formData.preferences.size}
                onChange={handleChange}
              />
              <label htmlFor="gender">Size: </label>
            </div>

            <div className={`${Styles.inputBlock}`}>
              <button className={`${Styles.inputBlock}`}>Submit</button>
            </div>

            {error && <div>{error}</div>}
          </form>
        </div>
        <div className={`${Styles.right}`}></div>
        <div className={`${Styles.img}`}></div>
      </div>
    </div>
  );
}
