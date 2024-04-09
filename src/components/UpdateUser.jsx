import { useState } from "react";
import Styles from "../css/UpdateUser.module.css";
import { Link } from "react-router-dom";
export default function UpdateUser() {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
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
        method: "POST",
        headers: { "Content-Type": "application/json" },
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
              <input
                className={`${Styles.input}`}
                type="text"
                name="info.space_type"
                value={formData.info.space_type}
                onChange={handleChange}
              />
              <label htmlFor="Space">Space Type: </label>
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
              <button>Submit</button>
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
