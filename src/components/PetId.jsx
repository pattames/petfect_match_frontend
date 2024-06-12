import { useContext, useEffect, useState } from "react";
import { PetsContext } from "../context/PetsContext";
import { useParams } from "react-router-dom";
import styles from "../css/PetId.module.css";

export default function PetId() {
  const { pets } = useContext(PetsContext);
  // const [error, setError] = useState("yo");

  const [owner, setOwner] = useState(null);

  const { id } = useParams();

  const selectedPet = pets && pets.find((pet) => pet._id === id);

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(
          `http://localhost:8080/user/${selectedPet.owner}`
          // `https://purrfect-backend-hsd1.onrender.com/user/${selectedPet.owner}`
        );
        const ownerData = await res.json();
        setOwner(ownerData.data);
      } catch (error) {
        setError(error);
      }
    }
    getData();
  }, [selectedPet]);

  return (
    <>
      <div className={styles.main_petId_container}>
        <div className={styles.left_container}>
          <div className={styles.title_container}>
            <h1 className={styles.title}>
              Hi, I'm{" "}
              <span className={styles.underline_wavey}>
                {selectedPet && selectedPet.name}
              </span>
              ,
            </h1>
            <h1 className={styles.second_title}>
              my <span className={styles.underline_wavey}>favourite</span> thing
              to do is...
            </h1>
            <h1 className={styles.third_title}>
              {selectedPet && selectedPet.favorite_thing}
            </h1>
            <div className={styles.imagesContainer}>
              {/* Display all pictures of the pet */}

              {selectedPet &&
                selectedPet.images.map((image) => (
                  <img
                    key={image.url}
                    src={image.url}
                    className={styles.image}
                  />
                ))}
            </div>
          </div>
          <div className={styles.description_box}>
            <div className={styles.statsContainer}>
              <h2 className={styles.description_title}>
                {selectedPet && selectedPet.name}'s Stats
              </h2>
              <h2 className={styles.statName}>
                Age:{" "}
                <span className={styles.statSpan}>
                  {selectedPet &&
                    selectedPet.characteristics &&
                    selectedPet.characteristics.age}
                </span>
              </h2>
              <h2 className={styles.statName}>
                Breed:{" "}
                <span className={styles.statSpan}>
                  {selectedPet &&
                    selectedPet.characteristics &&
                    selectedPet.characteristics.breed}
                </span>
              </h2>
              <h2 className={styles.statName}>
                Gender:{" "}
                <span className={styles.statSpan}>
                  {selectedPet &&
                    selectedPet.characteristics &&
                    selectedPet.characteristics.gender}
                </span>
              </h2>
              <h2 className={styles.statName}>
                Size:{" "}
                <span className={styles.statSpan}>
                  {selectedPet &&
                    selectedPet.characteristics &&
                    selectedPet.characteristics.size}
                </span>
              </h2>
            </div>
            <div className={styles.descriptionContainer}>
              <h2>A little bit more about {selectedPet && selectedPet.name}</h2>
              <p>{selectedPet && selectedPet.description}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.owner_container}>
        <div className={styles.OwnerDetails}>
          {owner && owner.name ? owner.name : "Name not available"},{" "}
          {owner && owner.info ? owner.info.location : "Location not available"}
        </div>
        {owner && owner.image && owner.image.url ? (
          <img className={styles.owner_pic} src={owner.image.url} alt="" />
        ) : (
          "Picture not available"
        )}
      </div>
      {/* {error && (
        <div>
          <span>{error}</span>
        </div>
      )} */}
    </>
  );
}
