import { useContext, useState, useRef } from "react";
import { PetsContext } from "../context/PetsContext";
import TinderCard from "react-tinder-card";

export default function Match() {
  const { pets } = useContext(PetsContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lastDirection, setLastDirection] = useState();
  const currentCardRef = useRef(null);
  const [noPetsMessage, setNoPetsMessage] = useState("");

  const swiped = (direction, nameToDelete, index) => {
    console.log("removing: " + nameToDelete);
    setLastDirection(direction);
    if (index < pets.length - 1) {
      setCurrentIndex(index + 1);
    } else {
      setNoPetsMessage("You've swiped through all the pets!");
      console.log("You've swiped through all the pets!");
    }
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };

  const swipe = (dir) => {
    if (currentCardRef.current && currentCardRef.current.swipe) {
      currentCardRef.current.swipe(dir); // Swipe the card programmatically
    }
  };

  if (!pets || pets.length === 0) {
    return <div>No pets available</div>;
  }

  const currentPet = pets[currentIndex];

  return (
    <>
      <h1>Match</h1>
      <div className="cardContainer">
        <TinderCard
          ref={currentCardRef}
          className="swipe"
          key={currentPet._id}
          onSwipe={(dir) => swiped(dir, currentPet.name, currentIndex)}
          onCardLeftScreen={() => outOfFrame(currentPet.name)}
        >
          <div
            style={{ backgroundImage: "url(" + currentPet.images[0].url + ")" }}
            className="card"
          ></div>
        </TinderCard>
      </div>
      <h2>{noPetsMessage}</h2>
      <div>Last swipe direction: {lastDirection}</div>
      <button onClick={() => swipe("left")}>Swipe Left</button>
      <button onClick={() => swipe("right")}>Swipe Right</button>
    </>
  );
}
