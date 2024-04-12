import { PetsContext } from "../context/PetsContext";
import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PreferencesContext } from "../context/PreferencesContext";

function Swipeable() {
  const { pets } = useContext(PetsContext);
  const { age, size, gender } = useContext(PreferencesContext);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itsMatch, setItsMatch] = useState(false);

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

  const currentPet = pets && pets[currentIndex];

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

  // console.log(currentPet);
  // console.log(itsMatch);

  return (
    <div>
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
