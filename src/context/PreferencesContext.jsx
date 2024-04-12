import { createContext, useState } from "react";

export const PreferencesContext = createContext();

export default function PreferencesContextProvider(props) {
  const [age, setAge] = useState("");
  const [size, setSize] = useState("");
  const [gender, setGender] = useState("");

  //We pass the data through "value":
  return (
    <PreferencesContext.Provider
      value={{ age, setAge, size, setSize, gender, setGender }}
    >
      {props.children}
    </PreferencesContext.Provider>
  );
}
