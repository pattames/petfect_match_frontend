import { PetsContext } from "../context/PetsContext";
import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";

function Swipeable() {
  const { pets } = useContext(PetsContext);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [filteredPets, setFilteredPets] = useState(pets);

  useEffect(() => {
    setFilteredPets(pets);
  }, [pets]);

  const dogs = pets && pets.filter((pet) => pet.pet_type === "dog");
  const cats = pets && pets.filter((pet) => pet.pet_type === "cat");
  const others = pets && pets.filter((pet) => pet.pet_type === "other");

  const handleAllPets = () => {
    setFilteredPets(pets);
  };

  const handleDogs = () => {
    setFilteredPets(dogs);
  };

  const handleCats = () => {
    setFilteredPets(cats);
  };

  const handleOthers = () => {
    setFilteredPets(others);
  };
  const handleNext = () => {
    if (currentIndex === pets.length - 1) {
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

  return (
    <div>
      <button onClick={handleAllPets}>All</button>
      <button onClick={handleDogs}>Dogs</button>
      <button onClick={handleCats}>Cats</button>
      <button onClick={handleOthers}>Others</button>
      {currentIndex < pets?.length && (
        <img
          src={currentPet && currentPet.images[0].url}
          alt={currentPet && currentPet.name}
        />
      )}
      <Link to={`/match/${currentPet._id}`}>
        <h3>More info about {currentPet.name}</h3>
      </Link>

      <button onClick={handleNext}>Next</button>
      <button onClick={handleBack}>Back</button>
    </div>
  );
}

export default Swipeable;
