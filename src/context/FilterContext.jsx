import { createContext, useEffect, useState } from "react";

export const FilterContext = createContext();

export default function FilterContextProvider(props) {
  const [pets, setPets] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(
          "https://purrfect-backend-hsd1.onrender.com/pets"
          // "http://localhost:8080/pets/"
        );
        const data = await res.json();
        setPets(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  const filterPets = (type) => {
    const filteredPets = pets.filter((pet) => pet.pet_type === type);
    setPets(filteredPets);
  };

  return (
    <FilterContext.Provider value={{ filterPets }}>
      {props.children}
    </FilterContext.Provider>
  );
}
