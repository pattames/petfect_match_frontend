import Styles from "../css/PetProfile.module.css";
import { useState, useContext, useEffect } from "react";

import { UserContext } from "../context/UserContext";
import ImgPlaceHolder from "./svg/ImgPlaceHolder";
import DogSpinner from "./DogSpinner.jsx";
import { useJwt } from "react-jwt";

export default function PetProfile() {
  const { user } = useContext(UserContext);
  const { decodedToken } = useJwt(user?.token);
  const _id = decodedToken?._id;
  const [characteristics, setcharacteristics] = useState({
    breed: "",
    age: "",
    size: "",
    gender: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [image, setImage] = useState("");
  const [preview, setPreview] = useState(null);

  const [petType, setpetType] = useState("");

  const [name, setName] = useState("");

  const [description, setDescription] = useState("");
  const [favorite, setFavorite] = useState("");

  useEffect(() => {
    if (image) {
      const objectUrl = URL.createObjectURL(image);
      setPreview(objectUrl);
      return () => URL.revokeObjectURL(objectUrl);
    }
  }, [image]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("characteristics", JSON.stringify(characteristics));
    formData.append("image", image);
    try {
      await fetch("http://localhost:8080/pets", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
        body: formData,
      });
      console.log("SUBMISSION SUCCESSFULL: ", formData);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
      setImage(null);
      setcharacteristics({
        breed: "",
        age: "",
        size: "",
        gender: "",
      });
      setName("");
    }
  };

  const handleChange = (e) => {
    console.log(e);
    setcharacteristics({ ...characteristics, [e.target.name]: e.target.value });
  };

  console.log("CHAR AFTER  CHANGE", characteristics);

  return (
    <div className={`${Styles.main}`}>
      <div className={`${Styles.container}`}>
        <div className={`${Styles.left}`}>
          {loading ? (
            <DogSpinner />
          ) : (
            <form className={`${Styles.form}`} onSubmit={handleSubmit}>
              <h3 className={`${Styles.title}`}>Add Pet</h3>
              <div className={`${Styles.test}`}>
                <div className={`${Styles.g1}`}>
                  <div className={`${Styles.inputBlock}`}>
                    <label className={`${Styles.lbl}`} htmlFor="name">
                      Name:
                    </label>
                    <input
                      className={`${Styles.input}`}
                      type="text"
                      name="name"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  </div>
                  <div className={`${Styles.inputBlock}`}>
                    <div id="petType" className={`${Styles.wrapper}`}>
                      <input
                        className={`${Styles.radioInput}`}
                        id="dog"
                        type="radio"
                        name="pet_type"
                        value="dog"
                        onChange={(e) => {
                          setpetType(e.target.value);
                        }}
                      />
                      <label htmlFor="dog" className={`${Styles.radioLabel}`}>
                        <span className={`${Styles.radioInnerCircle}`}></span>
                        Dog
                      </label>
                      <input
                        className={`${Styles.radioInput}`}
                        id="cat"
                        type="radio"
                        name="pet_type"
                        value="cat"
                        onChange={(e) => {
                          setpetType(e.target.value);
                        }}
                      />
                      <label htmlFor="cat" className={`${Styles.radioLabel}`}>
                        <span className={`${Styles.radioInnerCircle}`}></span>
                        Cat
                      </label>
                      <input
                        className={`${Styles.radioInput}`}
                        id="other"
                        type="radio"
                        name="pet_type"
                        value="other"
                        onChange={(e) => {
                          setpetType(e.target.value);
                        }}
                      />
                      <label htmlFor="other" className={`${Styles.radioLabel}`}>
                        <span className={`${Styles.radioInnerCircle}`}></span>
                        Other
                      </label>
                    </div>
                    <label className={`${Styles.lbl}`} htmlFor="pet_Type">
                      Pet Type:
                    </label>
                  </div>
                  {petType === "dog" && (
                    <div className={`${Styles.inputBlock}`}>
                      <label>
                        <select
                          value={characteristics.breed}
                          name="breed"
                          id="breed"
                          onChange={handleChange}
                        >
                          <option>--Select an option--</option>
                          <option value="French bulldog">French bulldog</option>
                          <option value="Labrador">Labrador</option>
                          <option value="Golden retriever">
                            Golden retriever
                          </option>
                          <option value="German shepherd">
                            German shepherd
                          </option>
                          <option value="Poodle">Poodle</option>
                          <option value="Daschund">Daschund</option>
                          <option value="Beagle">Beagle</option>
                          <option value="Rottweiler">Rottweiler</option>
                          <option value="Bulldog">Bulldog</option>
                          <option value="Australian Shepherd">
                            Australian Shepherd
                          </option>
                        </select>
                      </label>
                    </div>
                  )}
                  {petType === "cat" && (
                    <div className={`${Styles.inputBlock}`}>
                      <label>
                        <select
                          value={characteristics.breed}
                          name="breed"
                          id="breed"
                          onChange={handleChange}
                        >
                          <option>--Select an option--</option>
                          <option value="Ragdoll">Ragdoll</option>
                          <option value="Maincooncat">Main coon cat</option>
                          <option value="Devon Rex">Devon Rex</option>
                          <option value="Exotic shorthair">
                            Exotic shorthair
                          </option>
                          <option value="British shorthair">
                            British shorthair
                          </option>
                          <option value="Abyssinian">Abyssinian</option>
                          <option value="Domestic non-pedigreed cats">
                            Domestic non-pedigreed cats
                          </option>
                          <option value="Scottish fold">Scottish fold</option>
                          <option value="Siberian">Siberian</option>
                          <option value="Sphynx">Sphynx</option>
                        </select>
                      </label>
                    </div>
                  )}
                  <div className={`${Styles.inputBlock}`}>
                    <div id="size" className={`${Styles.wrapper}`}>
                      <input
                        className={`${Styles.radioInput}`}
                        id="small"
                        type="radio"
                        name="size"
                        value="small"
                        onChange={handleChange}
                      />
                      <label htmlFor="small" className={`${Styles.radioLabel}`}>
                        <span className={`${Styles.radioInnerCircle}`}></span>
                        Small
                      </label>
                      <input
                        className={`${Styles.radioInput}`}
                        id="medium"
                        type="radio"
                        name="size"
                        value="medium"
                        onChange={handleChange}
                      />
                      <label
                        htmlFor="medium"
                        className={`${Styles.radioLabel}`}
                      >
                        <span className={`${Styles.radioInnerCircle}`}></span>
                        Medium
                      </label>
                      <input
                        className={`${Styles.radioInput}`}
                        id="large"
                        type="radio"
                        name="size"
                        value="large"
                        onChange={handleChange}
                      />
                      <label htmlFor="large" className={`${Styles.radioLabel}`}>
                        <span className={`${Styles.radioInnerCircle}`}></span>
                        large
                      </label>
                    </div>
                    <label className={`${Styles.lbl}`} htmlFor="size">
                      Pet Size:
                    </label>
                  </div>
                  <div className={`${Styles.inputBlock}`}>
                    <div id="age" className={`${Styles.wrapper}`}>
                      <input
                        className={`${Styles.radioInput}`}
                        id="newborn"
                        type="radio"
                        name="age"
                        value="newborn"
                        onChange={handleChange}
                      />
                      <label
                        htmlFor="newborn"
                        className={`${Styles.radioLabel}`}
                      >
                        <span className={`${Styles.radioInnerCircle}`}></span>
                        Newborn
                      </label>
                      <input
                        className={`${Styles.radioInput}`}
                        id="young"
                        type="radio"
                        name="age"
                        value="young"
                        onChange={handleChange}
                      />
                      <label htmlFor="young" className={`${Styles.radioLabel}`}>
                        <span className={`${Styles.radioInnerCircle}`}></span>
                        Young
                      </label>
                      <input
                        className={`${Styles.radioInput}`}
                        id="adult"
                        type="radio"
                        name="age"
                        value="adult"
                        onChange={handleChange}
                      />
                      <label htmlFor="adult" className={`${Styles.radioLabel}`}>
                        <span className={`${Styles.radioInnerCircle}`}></span>
                        Adult
                      </label>
                      <input
                        className={`${Styles.radioInput}`}
                        id="senior"
                        type="radio"
                        name="age"
                        value="senior"
                        onChange={handleChange}
                      />
                      <label
                        htmlFor="senior"
                        className={`${Styles.radioLabel}`}
                      >
                        <span className={`${Styles.radioInnerCircle}`}></span>
                        Senior
                      </label>
                    </div>
                    <label className={`${Styles.lbl}`} htmlFor="age">
                      Pet Age:
                    </label>
                  </div>
                  <div className={`${Styles.inputBlock}`}>
                    <div id="gender" className={`${Styles.wrapper}`}>
                      <input
                        className={`${Styles.radioInput}`}
                        id="female"
                        type="radio"
                        name="gender"
                        value="female"
                        onChange={handleChange}
                      />
                      <label
                        htmlFor="female"
                        className={`${Styles.radioLabel}`}
                      >
                        <span className={`${Styles.radioInnerCircle}`}></span>
                        Female
                      </label>
                      <input
                        className={`${Styles.radioInput}`}
                        id="male"
                        type="radio"
                        name="gender"
                        value="male"
                        onChange={handleChange}
                      />
                      <label htmlFor="male" className={`${Styles.radioLabel}`}>
                        <span className={`${Styles.radioInnerCircle}`}></span>
                        Male
                      </label>
                    </div>
                    <label className={`${Styles.lbl}`} htmlFor="gender">
                      Gender:
                    </label>
                  </div>
                  <div className={`${Styles.inputBlock}`}>
                    <label className={`${Styles.lbl}`} htmlFor="description">
                      Description:
                    </label>
                    <textarea
                      className={`${Styles.input}`}
                      type="text"
                      name="description"
                      value={description}
                      rows={5}
                      cols={40}
                      placeholder="Enter your text here..."
                      onChange={(e) => {
                        setDescription(e.target.value);
                      }}
                    />
                  </div>
                  <div className={`${Styles.inputBlock}`}>
                    <label className={`${Styles.lbl}`} htmlFor="favorite">
                      Favorite things to do:
                    </label>
                    <input
                      className={`${Styles.input}`}
                      type="text"
                      name="favorite"
                      value={favorite}
                      onChange={(e) => {
                        setFavorite(e.target.value);
                      }}
                    />
                  </div>
                  <div className={`${Styles.inputBlock}`}>
                    <button type="submit" className={`${Styles.btn}`}>
                      Update
                    </button>
                  </div>
                </div>
                <div className={`${Styles.g2}`}>
                  <div className={`${Styles.right}`}>
                    <div className={`${Styles.inputBlock}`}>
                      <label
                        className={`${Styles.custumFileUpload}`}
                        htmlFor="file"
                        style={{ zIndex: 100 }}
                      >
                        {image ? (
                          <img
                            src={preview}
                            alt="Click to change"
                            style={{
                              maxWidth: "100%",
                              maxHeight: "100%",
                              cursor: "pointer",
                            }}
                          />
                        ) : (
                          <div className={`${Styles.icon}`}>
                            <ImgPlaceHolder className={`${Styles.svg}`} />
                            <div className={`${Styles.text}`}>
                              <span>Click to upload image</span>
                            </div>
                          </div>
                        )}
                        <input
                          id="file"
                          type="file"
                          name="image"
                          accept="image/*"
                          style={{ display: "none" }}
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
