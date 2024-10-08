import { PetsContext } from "../context/PetsContext";
import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { PreferencesContext } from "../context/PreferencesContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Pagination, Navigation } from "swiper/modules";
import styles from "../css/Swipeable.module.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"; // Import CSS for navigation arrows
import "swiper/css/effect-cards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCat,
  faDog,
  faStar,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import LottieAnimation from "./LottieAnimation";

function Swipeable() {
  const { pets } = useContext(PetsContext);
  const { age, size, gender } = useContext(PreferencesContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itsMatch, setItsMatch] = useState(false);
  const [filteredPets, setFilteredPets] = useState([]);
  const [currentPet, setCurrentPet] = useState(null);

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

  //Comparison logic
  //If preferences age === pet age then it's a match, else it's not
  useEffect(() => {
    const comparison = () => {
      if (
        age &&
        age === currentPet?.characteristics.age &&
        size &&
        size === currentPet?.characteristics.size &&
        gender &&
        gender === currentPet?.characteristics.gender
      ) {
        setItsMatch(true);
      } else {
        setItsMatch(false);
      }
    };
    comparison();
    filteredPets.length && setCurrentPet(filteredPets[currentIndex]);
  }, [age, size, gender, currentIndex, currentPet, filteredPets]);

  //Redirect user to email
  const buildEmailDraftUrl = (recipient, subject, body) => {
    return `mailto:${recipient}?subject=${encodeURIComponent(
      subject
    )}&body=${body}`;
  };

  const handleEmailClick = () => {
    const recipient = "marcofanti@gmail.com";
    const subject = "PetFect Match - Adopt a Pet";
    const body = `I am writing to express my strong interest in adopting your pet ${currentPet.name}. I've been looking to welcome a furry (or feathered!) friend into my loving home!`;

    const draftUrl = buildEmailDraftUrl(recipient, subject, body);
    window.location.href = draftUrl;
    window.open(draftUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.filter_btns_top}>
          <a className={styles.filter_btn} onClick={handleAllPets}>
            All
            <FontAwesomeIcon
              icon={faHeart}
              style={{ color: "#792f6c" }}
              size="lg"
            />
          </a>
          <a className={styles.filter_btn_dogs} onClick={handleDogs}>
            Dogs{" "}
            <FontAwesomeIcon
              icon={faDog}
              size="lg"
              style={{ color: "#792f6c" }}
            />
          </a>
          <a className={styles.filter_btn} onClick={handleCats}>
            Cats{" "}
            <FontAwesomeIcon
              icon={faCat}
              size="lg"
              style={{ color: "#792f6c" }}
            />
          </a>
          <a className={styles.filter_btn} onClick={handleOthers}>
            Others{" "}
            <FontAwesomeIcon
              icon={faStar}
              style={{ color: "#792f6c" }}
              size="lg"
            />
          </a>
        </div>
        <Swiper
          effect={"cards"} // Add the effect property to enable the tilting effect
          grabCursor={true}
          modules={[EffectCards, Pagination, Navigation]}
          pagination={true} // Enable pagination dots
          navigation={false} // Enable navigation arrows
          className={styles.mySwiper}
          style={{
            "--swiper-navigation-color": "#000",
            "--swiper-pagination-color": "#dedede",
          }} // Use CSS module class
          onSlideChange={(swiper) => {
            setCurrentIndex(swiper.activeIndex);
            setCurrentPet(filteredPets[currentIndex]);
          }}
        >
          {/* Map through each pet and display the first image in each slide */}
          {filteredPets &&
            filteredPets?.map((pet, index) => (
              <SwiperSlide key={index} className={styles.slide}>
                <div className={styles.petCard}>
                  <img
                    src={pet.images && pet.images[0] && pet.images[0].url}
                    alt={`pets ${index + 1}`}
                    className={styles.image}
                  />
                  <div className={styles.nameWrapper}>
                    <Link
                      className={styles.more_info}
                      to={`/match/${currentPet?._id}`}
                    >
                      <div className={styles.nameWrapper}>
                        <h3>More about {pet.name}</h3>
                      </div>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>

        {itsMatch && (
          <button
            className={styles.contact_owner_btn}
            onClick={handleEmailClick}
          >
            Contact the owner
          </button>
        )}
        {itsMatch && (
          <div className={styles.divLogo}>
            <LottieAnimation src="https://lottie.host/embed/24382d03-2ec4-40c3-9091-913d5641ee6a/8hzjqUafXD.json" />
            <img src="logo.png" alt="" className={styles.logo} />
          </div>
        )}
      </div>
    </>
  );
}

export default Swipeable;
