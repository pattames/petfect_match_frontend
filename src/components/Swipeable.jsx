import { PetsContext } from "../context/PetsContext";

import { useState, useContext, useEffect } from "react";

import { Link } from "react-router-dom";
import { PreferencesContext } from "../context/PreferencesContext";

import styles from "../css/Swipeable.module.css";

function Swipeable() {
  const { pets } = useContext(PetsContext);
  const { age, size, gender } = useContext(PreferencesContext);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itsMatch, setItsMatch] = useState(false);

  const [filteredPets, setFilteredPets] = useState([]);

  useEffect(() => {
    setFilteredPets(pets);
  }, [pets]);

  const dogs = pets && pets.filter((pet) => pet.pet_type === "dog");
  const cats = pets && pets.filter((pet) => pet.pet_type === "cat");
  const others = pets && pets.filter((pet) => pet.pet_type === "other");

  const handleAllPets = () => {
    setFilteredPets(pets);
    setCurrentIndex(0);
  };

  const handleDogs = () => {
    setFilteredPets(dogs);
    setCurrentIndex(0);
  };

  const handleCats = () => {
    setFilteredPets(cats);
    setCurrentIndex(0);
  };

  const handleOthers = () => {
    setFilteredPets(others);
    setCurrentIndex(0);
  };
  const handleNext = () => {
    if (currentIndex === filteredPets.length - 1) {
      return;
    }
    setCurrentIndex((prev) => prev + 1);
  };

  const handleBack = () => {
    if (currentIndex === 0) {
      return;
    }
    setCurrentIndex((prev) => prev - 1);
  };

  const currentPet = filteredPets && filteredPets[currentIndex];

  //Comparison logic
  //If preferences age === pet age then it's a match, else it's not
  useEffect(() => {
    const comparison = () => {
      if (
        age &&
        age === currentPet.characteristics.age &&
        size &&
        size === currentPet.characteristics.size &&
        gender &&
        gender === currentPet.characteristics.gender
      ) {
        setItsMatch(true);
      } else {
        setItsMatch(false);
      }
    };
    comparison();
  }, [age, size, gender, handleBack, handleNext]);

  console.log(itsMatch);
  console.log(currentPet);

  return (
    <div className={styles.container}>
      <div className={styles.filter_btns}>
        <button onClick={handleAllPets}>All</button>
        <button onClick={handleDogs}>Dogs</button>
        <button onClick={handleCats}>Cats</button>
        <button onClick={handleOthers}>Others</button>
      </div>

      {itsMatch && (
        <div className={styles.match_message}>
          <h1>Potential match!</h1>
        </div>
      )}

      {currentIndex < pets?.length && (
        <img
          src={
            currentPet && currentPet.images.length
              ? currentPet.images[0].url
              : "/picnopet.jpeg"
          }
          alt={currentPet && currentPet.name}
        />
      )}

      <Link className={styles.more_info} to={`/match/${currentPet?._id}`}>
        <h3>More info about {currentPet?.name}</h3>
      </Link>

      <div className={styles.main_btns}>
        {itsMatch && <button>Contact owner</button>}
        <button onClick={handleNext}>Next</button>
        <button onClick={handleBack}>Back</button>
      </div>
    </div>
  );
}

export default Swipeable;
