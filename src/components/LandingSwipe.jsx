import { useContext, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { PetsContext } from "../context/PetsContext.jsx";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"; // Import CSS for navigation arrows
import "swiper/css/effect-cards";
import styles from "../css/LandingSwipe.module.css"; // Import CSS module
import { EffectCards, Pagination, Navigation } from "swiper/modules";

export default function LandingSwipe() {
  const { pets } = useContext(PetsContext);
  // console.log(pets);

  return (
    <div className={styles.container}>
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
        {pets &&
          pets.map((pet, index) => (
            <SwiperSlide key={index} className={styles.slide}>
              <div className={styles.petCard}>
                <img
                  src={pet.images && pet.images[0] && pet.images[0].url}
                  alt={`pets ${index + 1}`}
                  className={styles.image}
                />
                <div className={styles.nameWrapper}>
                  <h3>{pet.name}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
      <div className={styles.btnWrapper}>
        <Link to="/match">
          <button className={styles.btn}>Find your match</button>
        </Link>
      </div>
    </div>
  );
}
