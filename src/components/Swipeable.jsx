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

function Swipeable() {
  const { pets } = useContext(PetsContext);
  const { age, size, gender } = useContext(PreferencesContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itsMatch, setItsMatch] = useState(false);
  const [filteredPets, setFilteredPets] = useState([]);
  const [currentPet, setCurrentPet] = useState(null);

  useEffect(() => {
    setFilteredPets(pets);
    console.log("rendered");
  }, [pets]);

  console.log("CHARACTERISTICS", age, size, gender);

  console.log("FILTERED PETS", filteredPets);

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
    console.log("FILTERED PETS IN EFFECT", filteredPets);
    filteredPets.length && setCurrentPet(filteredPets[currentIndex]);
  }, [age, size, gender, currentIndex, currentPet, filteredPets]);

  // console.log(itsMatch);
  console.log("CURRENT PET", currentPet);

  //Redirect user to email
  const buildEmailDraftUrl = (recipient, subject, body) => {
    return `mailto:<span class="math-inline">\{recipient\}?subject\=</span>{subject}&body=${body}`;
  };

  const handleEmailClick = () => {
    const recipient = "example@email.com";
    const subject = "Your Subject";
    const body = "Your pre-filled email content";
    const draftUrl = buildEmailDraftUrl(recipient, subject, body);
    window.location.href = draftUrl;
  };
  return (
    <>
      <div className={styles.container}>
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
            console.log("SUP", swiper);
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
        <div className={styles.filter_btns_top}>
          <a className={styles.filter_btn} onClick={handleAllPets}>
            All
            <FontAwesomeIcon
              icon={faHeart}
              style={{ color: "#792f6c" }}
              size="xl"
            />
          </a>
          <a className={styles.filter_btn_dogs} onClick={handleDogs}>
            Dogs{" "}
            <FontAwesomeIcon
              icon={faDog}
              size="xl"
              style={{ color: "#792f6c" }}
            />
          </a>
          <a className={styles.filter_btn} onClick={handleCats}>
            Cats{" "}
            <FontAwesomeIcon
              icon={faCat}
              size="xl"
              style={{ color: "#792f6c" }}
            />
          </a>
          <a className={styles.filter_btn} onClick={handleOthers}>
            Others{" "}
            <FontAwesomeIcon
              icon={faStar}
              style={{ color: "#792f6c" }}
              size="xl"
            />
          </a>
        </div>

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
            <img src="logo.png" alt="" className={styles.logo} />
          </div>
        )}
      </div>
    </>
  );
}

export default Swipeable;
