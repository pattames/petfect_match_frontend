import { useContext } from "react";
import { PetsContext } from "../context/PetsContext";
import TinderCard from "react-tinder-card";

export default function Match() {
  const { pets } = useContext(PetsContext);
  console.log(pets);

  //   const onSwipe = (direction) => {
  //     console.log("You swiped: " + direction);
  //   };

  //   const onCardLeftScreen = (myIdentifier) => {
  //     console.log(myIdentifier + " left the screen");
  //   };

  return (
    <>
      <h1>Match</h1>
      {/* {pets &&
          pets.map((pet) =>
            pet.images.map((image) => <img src={image.url} alt={pet.name} />)
          )} */}
      <div className="cardContainer">
        {pets &&
          pets.map((pet) => (
            <TinderCard
              className="swipe"
              key={pet._id}
              onSwipe={(dir) => swiped(dir, pet.name)}
              onCardLeftScreen={() => outOfFrame(pet.name)}
            >
              {pet.images.map((img) => (
                <div
                  style={{ backgroundImage: "url(" + img.url + ")" }}
                  className="card"
                ></div>
              ))}
            </TinderCard>
          ))}
      </div>
    </>
  );
}
