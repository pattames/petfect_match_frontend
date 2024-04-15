import { useContext, useEffect, useState } from "react";
import { PetsContext } from "../context/PetsContext";
import { useParams } from "react-router-dom";
import styles from "../css/PetId.module.css";
import ReactSimplyCarousel from "react-simply-carousel";

export default function PetId() {
  const { pets } = useContext(PetsContext);

  const [owner, setOwner] = useState(null);

  const { id } = useParams();

  const selectedPet = pets && pets.find((pet) => pet._id === id);

  console.log("pets inside petId component:", selectedPet);

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(
          `http://localhost:8080/user/${selectedPet.owner}`
        );
        const ownerData = await res.json();
        setOwner(ownerData.data);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, [selectedPet]);

  console.log(owner);

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
                  <div key={image.url}>
                    <img src={image.url} className={styles.image} />
                  </div>
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
                  {selectedPet && selectedPet.characteristics.age}
                </span>
              </h2>
              <h2 className={styles.statName}>
                Breed:{" "}
                <span className={styles.statSpan}>
                  {selectedPet && selectedPet.characteristics.breed}
                </span>
              </h2>
              <h2 className={styles.statName}>
                Gender:{" "}
                <span className={styles.statSpan}>
                  {selectedPet && selectedPet.characteristics.gender}
                </span>
              </h2>
              <h2 className={styles.statName}>
                Size:{" "}
                <span className={styles.statSpan}>
                  {selectedPet && selectedPet.characteristics.size}
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
          {owner && owner.name}, {owner && owner.info.location}
        </div>
        <img
          className={styles.owner_pic}
          src={owner && owner.image.url}
          alt=""
        />
      </div>
    </>
  );
}
