import { useContext, useEffect, useState } from "react";
import { PetsContext } from "../context/PetsContext";
import { useParams } from "react-router-dom";
import styles from "../css/PetId.module.css";
import ReactSimplyCarousel from "react-simply-carousel";

export default function PetId() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const { pets } = useContext(PetsContext);

  const [owner, setOwner] = useState(null);

  const { id } = useParams();

  const selectedPet = pets && pets.find((pet) => pet._id === id);

  console.log("pets inside petId component:", selectedPet);

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(
          `http://localhost:8080/user/${selectedPet.owner}`
        );
        const ownerData = await res.json();
        setOwner(ownerData.data);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, [selectedPet]);

  console.log(owner);

  return (
    <>
      <div className={styles.main_petId_container}>
        <div className={styles.left_container}>
          <div className={styles.title_container}>
            <h1 className={styles.title}>
              Hi, I'm{" "}
              <span className={styles.underline_wavey}>
                {selectedPet && selectedPet.name}
              </span>
              ,
            </h1>
            <h1 className={styles.second_title}>
              my <span className={styles.underline_wavey}>favourite</span> thing
              to do is...
            </h1>
            <h1 className={styles.third_title}>
              {selectedPet && selectedPet.favorite_thing}
            </h1>
            <div>
              <ReactSimplyCarousel
                activeSlideIndex={activeSlideIndex}
                onRequestChange={setActiveSlideIndex}
                itemsToShow={1}
                itemsToScroll={1}
                infinite={true}
                delay={50}
                forwardBtnProps={{
                  //here you can also pass className, or any other button element attributes
                  style: {
                    alignSelf: "center",
                    background: "black",
                    border: "none",
                    borderRadius: "50%",
                    color: "white",
                    cursor: "pointer",
                    fontSize: "20px",
                    height: 30,
                    lineHeight: 1,
                    textAlign: "center",
                    width: 30,
                  },
                  children: <span>{`>`}</span>,
                }}
                backwardBtnProps={{
                  //here you can also pass className, or any other button element attributes
                  style: {
                    alignSelf: "center",
                    background: "black",
                    border: "none",
                    borderRadius: "50%",
                    color: "white",
                    cursor: "pointer",
                    fontSize: "20px",
                    height: 30,
                    lineHeight: 1,
                    textAlign: "center",
                    width: 30,
                  },
                  children: <span>{`<`}</span>,
                }}
                responsiveProps={[
                  {
                    itemsToShow: 1,
                    itemsToScroll: 1,
                    minWidth: 768,
                  },
                ]}
                speed={400}
                easing="linear"
              >
                {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
                <div style={{ width: 500, height: 500 }}>
                  <img
                    src={
                      selectedPet &&
                      selectedPet.images[0] &&
                      selectedPet.images[0].url
                    }
                    alt=""
                  />
                </div>
                <div style={{ width: 500, height: 500 }}>
                  <img
                    src={
                      selectedPet &&
                      selectedPet.images[1] &&
                      selectedPet.images[1].url
                    }
                    alt=""
                  />
                </div>

                {selectedPet && selectedPet.images[2] && (
                  <div style={{ width: 500, height: 500 }}>
                    <img src={selectedPet.images[2].url} alt="" />
                  </div>
                )}
                {selectedPet && selectedPet.images[3] && (
                  <div style={{ width: 500, height: 500 }}>
                    <img src={selectedPet.images[3].url} alt="" />
                  </div>
                )}
              </ReactSimplyCarousel>
            </div>
            {/* {selectedPet &&
              selectedPet.images.map((image) => (
                <div key={image.url}>
                  <img src={image.url} />
                </div>
              ))} */}
          </div>
          <div className={styles.description_box}>
            <h2 className={styles.description_title}>
              {selectedPet && selectedPet.name}'S STATS
            </h2>
            <h2>AGE: {selectedPet && selectedPet.characteristics.age}</h2>
            <h2>BREED: {selectedPet && selectedPet.characteristics.breed}</h2>
            <h2>GENDER: {selectedPet && selectedPet.characteristics.gender}</h2>
            <h2>SIZE: {selectedPet && selectedPet.characteristics.size}</h2>
            <h2>A LITTLE BIT MORE ABOUT {selectedPet && selectedPet.name}</h2>
            <p>{selectedPet && selectedPet.description}</p>
          </div>
        </div>
      </div>
      <div className={styles.right_container}>
        Owner
        <div>{owner && owner.name}</div>
        <img
          className={styles.owner_pic}
          src={owner && owner.image.url}
          alt=""
        />
        <div>{owner && owner.info.location}</div>
      </div>
    </>
  );
}
