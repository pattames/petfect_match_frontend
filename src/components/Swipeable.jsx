
import { PetsContext } from "../context/PetsContext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

function Swipeable() {
  const { pets } = useContext(PetsContext);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  return (
    <div>
      {currentIndex < pets?.length && (
        <img
          src={pets[currentIndex].images[0].url}
          alt={pets[currentIndex].name}
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
