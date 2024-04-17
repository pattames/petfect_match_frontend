import { createContext, useEffect, useState } from "react";

export const PetsContext = createContext();

export default function PetsContextProvider(props) {
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

  //We pass the data through "value":
  return (
    <PetsContext.Provider value={{ pets, setPets }}>
      {props.children}
    </PetsContext.Provider>
  );
}
