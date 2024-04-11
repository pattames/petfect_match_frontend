import { useState, useContext, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import styles from "../css/Swipeable.module.css";
import { PetsContext } from "../context/PetsContext";
import { Link } from "react-router-dom";
import { FilterContext } from "../context/FilterContext";

function Swipeable() {
  const { pets } = useContext(PetsContext);
  const { filteredPets, setSelectedType } = useContext(FilterContext);

  const images = pets?.map((pet) => (
    <img key={pet._id} src={pet.images[0].url} />
  ));

  console.log(images);
  const [cards, setCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  //   const [swipingStyle, setSwipingStyle] = useState({});

  const currentPet = pets && pets[currentIndex];

  console.log("CURRENTPET", currentPet);
  useEffect(() => {
    if (filteredPets) {
      const images = filteredPets?.map((pet) => (
        <div key={pet._id}>
          <img src={pet.images[0].url} />
          <h2>{pet.name}</h2>
        </div>
      ));
      setCards(images);
      // setCurrentIndex(0);
    }
  }, [filteredPets]);

  const handlers = useSwipeable({
    onSwiping: (eventData) => {
      const rotation = eventData.deltaX * 0.1; // Adjust the rotation based on swiping
      const opacity = 1 - Math.min(Math.abs(eventData.deltaX) / 300, 1); // Fade the card as it gets swiped
      setSwipingStyle({
        transform: `translateX(${eventData.deltaX}px) rotate(${rotation}deg)`,
        opacity: opacity,
      });
    },
    onSwipedLeft: () => {
      moveNext();
      setSwipingStyle({});
    },
    onSwipedRight: () => {
      movePrev();
      setSwipingStyle({});
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const moveNextRight = () => {
    setCurrentIndex((prev) => (prev + 1 < cards.length ? prev + 1 : prev));
  };

  const moveNextLeft = () => {
    setCurrentIndex((prev) => (prev + 1 < cards.length ? prev + 1 : prev));
  };

  const movePrev = () => {
    setCurrentIndex((prev) => (prev - 1 >= 0 ? prev - 1 : prev));
  };

  const renderCard = (card, index) =>
    currentIndex === index && (
      <div
        // {...handlers}
        // key={index}
        className={styles.card}
        // style={swipingStyle}
      >
        <p className={styles.text}>{card}</p>
      </div>
    );
  // Event handlers for filtering
  const handleFilterCats = () => {
    setSelectedType("cat");
  };

  const handleFilterDogs = () => {
    setSelectedType("dog");
  };

  const handleFilterOthers = () => {
    setSelectedType("other");
  };

  const handleFilterAll = () => {
    setSelectedType("");
  };

  return (
    <>
      <button onClick={handleFilterAll}>ALL</button>
      <button onClick={handleFilterCats}>CATS</button>
      <button onClick={handleFilterDogs}>DOGS</button>
      <button onClick={handleFilterOthers}>OTHERS</button>
      <Link to={`/match/${filteredPets[currentIndex]?._id}`}>
        <div className={styles.container}>{cards.map(renderCard)}</div>
      </Link>
      <button onClick={movePrev}>Show me the previous pet</button>
      <button onClick={moveNextRight}>Yep</button>
      <button onClick={moveNextLeft}>Noup</button>
    </>
  );
}

export default Swipeable;
