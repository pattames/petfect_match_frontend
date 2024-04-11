import { createContext, useEffect, useState } from "react";

export const FilterContext = createContext();

export default function FilterContextProvider(props) {
  const [pets, setPets] = useState(null);
  const [selectedType, setSelectedType] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(
          //https://purrfect-backend-hsd1.onrender.com/pets
          "http://localhost:8080/pets/"
        );
        const data = await res.json();
        setPets(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  const filteredPets = pets?.filter((pet) => pet.pet_type === selectedType);

  return (
    <FilterContext.Provider value={{ setSelectedType, filteredPets }}>
      {props.children}
    </FilterContext.Provider>
  );
}
