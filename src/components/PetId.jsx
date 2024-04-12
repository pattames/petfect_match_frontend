import { useContext } from "react";
import { PetsContext } from "../context/PetsContext";
import { useParams } from "react-router-dom";

export default function PetId() {
  const { pets } = useContext(PetsContext);

  const { id } = useParams();

  const selectedPet = pets && pets.find((pet) => pet._id === id);

  console.log("pets inside petId component:", selectedPet);

  return (
    <>
      <h1>
        Hi I'm {selectedPet.name}, my favourite thing to do is...{" "}
        {selectedPet.favorite_thing}
      </h1>
      <img src="" alt="" />
    </>
  );
}
