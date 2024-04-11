import { useState, useContext, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import styles from "../css/Swipeable.module.css";
import { PetsContext } from "../context/PetsContext";
import { Link } from "react-router-dom";

function Swipeable() {
  const { pets } = useContext(PetsContext);
  console.log("PETS", pets);
  const cats = pets ? pets.filter((pet) => pet.pet_type === "cat") : [];

  console.log(cats);

  const images = pets?.map((pet) => (
    <img key={pet._id} src={pet.images[0].url} />
  ));

  console.log(images);
  const [cards, setCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [swipingStyle, setSwipingStyle] = useState({});

  const currentPet = pets && pets[currentIndex];

  useEffect(() => {
    if (pets) {
      const images = pets?.map((pet) => (
        <img key={pet._id} src={pet.images[0].url} />
      ));
      setCards(images);
    }
  }, [pets]);

  console.log("CARDS", cards);

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

  return (
    <>
      <div className={styles.container}>{cards.map(renderCard)}</div>
      <Link to={`/match/${currentPet?._id}`}>
        <h2>More about {currentPet?.name}</h2>
      </Link>
      <button onClick={movePrev}>Show me the previous pet</button>
      <button onClick={moveNextRight}>Yep</button>
      <button onClick={moveNextLeft}>Noup</button>
    </>
  );
}

export default Swipeable;
