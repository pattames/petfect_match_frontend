import { createContext, useEffect, useState } from "react";

export const FilterContext = createContext();

export default function FilterContextProvider(props) {
  const [pets, setPets] = useState(null);

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

  return (
    <FilterContext.Provider value={{}}>{props.children}</FilterContext.Provider>
  );
}
