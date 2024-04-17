import { useState, useContext, useEffect } from "react";
import Styles from "../css/UserProfile.module.css";
import { UserContext } from "../context/UserContext";
import ImgPlaceHolder from "./svg/ImgPlaceHolder";
import DogSpinner from "./DogSpinner.jsx";
import { useJwt } from "react-jwt";

export default function UserProfile() {
  const { user } = useContext(UserContext);
  const { decodedToken } = useJwt(user?.token);
  const _id = decodedToken?._id;
  const [info, setInfo] = useState({
    location: "",
    space_available: "",
    space_type: "",
  });
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [successmessage, setSuccessMessage] = useState("");

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
    formData.append("info", JSON.stringify(info));
    formData.append("image", image);
    try {
      await fetch(
        //`http://localhost:8080/user/${_id}`,
        `https://purrfect-backend-hsd1.onrender.com/user/${_id}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
          body: formData,
        }
      );
      setSuccessMessage("SUBMISSION SUCCESSFULL");
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
      setImage(null);
      setInfo({
        location: "",
        space_available: "",
        space_type: "",
      });
      setName("");
    }
  };

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    const { files } = e.target;
    if (files) {
      setImage(files[0]);
    }
  };

  return (
    <div className={`${Styles.main}`}>
      <div className={`${Styles.container}`}>
        <div className={`${Styles.left}`}>
          {loading ? (
            <DogSpinner />
          ) : (
            <form className={`${Styles.form}`} onSubmit={handleSubmit}>
              {/* <h3 className={`${Styles.title}`}>User Profile</h3> */}
              <h2 className={Styles.successmessage}>{successmessage}</h2>
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
                      // placeholder={user.name ? user.name : "-"}
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  </div>
                  <div className={`${Styles.inputBlock}`}>
                    <label className={`${Styles.lbl}`} htmlFor="location">
                      Location:
                    </label>
                    <input
                      className={`${Styles.input}`}
                      type="text"
                      name="location"
                      // placeholder={
                      //   user.info.location ? user.info.location : "-"
                      // }
                      value={info.location}
                      onChange={handleChange}
                    />
                  </div>
                  <div className={`${Styles.inputBlock}`}>
                    <label
                      className={`${Styles.lbl}`}
                      htmlFor="space_available"
                    >
                      Space available:
                    </label>
                    <input
                      className={`${Styles.input}`}
                      name="space_available"
                      type="text"
                      // placeholder={
                      //   user.info.space_available
                      //     ? user.info.space_available
                      //     : "-"
                      // }
                      value={info.space_available}
                      onChange={handleChange}
                    />
                  </div>
                  <div className={`${Styles.inputBlock}`}>
                    <label className={`${Styles.lbl}`} htmlFor="space_type">
                      Space type:
                    </label>
                    <input
                      className={`${Styles.input}`}
                      name="space_type"
                      type="text"
                      // placeholder={
                      //   user.info.space_type ? user.info.space_type : "-"
                      // }
                      value={info.space_type}
                      onChange={handleChange}
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
                          onChange={handleImage}
                          style={{ display: "none" }} // Hide the file input element
                        />
                      </label>
                    </div>
                  </div>
                </div>

                {error && <div>{error}</div>}
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
