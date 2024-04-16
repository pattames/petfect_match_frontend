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

function Swipeable() {
  const { pets } = useContext(PetsContext);
  const { age, size, gender } = useContext(PreferencesContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itsMatch, setItsMatch] = useState(false);
  const [filteredPets, setFilteredPets] = useState([]);

  useEffect(() => {
    setFilteredPets(pets);
    console.log("rendered");
  }, [pets]);

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

  // console.log(itsMatch);
  // console.log(currentPet);

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
  console.log("§§§§§§§§§§§§§§§§§§§", currentPet);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.filter_btns_top}>
          <button className={styles.filter_btn} onClick={handleAllPets}>
            All
            <img className={styles.heart_icon} src="/Heart-icon.png" alt="" />
          </button>
          <button className={styles.filter_btn_dogs} onClick={handleDogs}>
            Dogs <img className={styles.dog_icon} src="/Dog-icon.png" alt="" />
          </button>
        </div>

        <div className={styles.filter_btns_btm}>
          <button className={styles.filter_btn} onClick={handleCats}>
            Cats <img className={styles.cat_icon} src="/Cat-icon.png" alt="" />
          </button>
          <button className={styles.filter_btn} onClick={handleOthers}>
            Others{" "}
            <img className={styles.star_icon} src="/Star-icon.webp" alt="" />
          </button>
        </div>
        <Swiper
          effect={"cards"} // Add the effect property to enable the tilting effect
          grabCursor={true}
          modules={[EffectCards, Pagination, Navigation]}
          pagination={true} // Enable pagination dots
          navigation={true} // Enable navigation arrows
          className={styles.mySwiper}
          style={{
            "--swiper-navigation-color": "#000",
            "--swiper-pagination-color": "#dedede",
          }} // Use CSS module class
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
                      <h3>More about {pet.name}</h3>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
        {/* {currentIndex < pets?.length && (
          <div className={styles.picture_pet_container}>
            <img
              className={styles.picture_pet}
              src={
                currentPet && currentPet.images.length
                  ? currentPet.images[0].url
                  : "/picnopet.jpeg"
              }
              //maybe here??? replace
              alt={currentPet && currentPet.name}
            />
          </div>
        )} */}
        {itsMatch && (
          <div className={styles.match_message}>
            <img className={styles.petfect_match_logo} src="logo.png" alt="" />
          </div>
        )}
        <Link className={styles.more_info} to={`/match/${currentPet?._id}`}>
          <div className={styles.more_about_pet}>
            More about <br /> {currentPet?.name}
          </div>
        </Link>

        <div className={styles.main_btns}>
          <div className={styles.next_back_btns_container}>
            <button className={styles.next_btn} onClick={handleNext}>
              Next
            </button>
            <button className={styles.back_btn} onClick={handleBack}>
              Back
            </button>
            {itsMatch && (
              <button
                className={styles.contact_owner_btn}
                onClick={handleEmailClick}
              >
                Contact owner !!!
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Swipeable;
