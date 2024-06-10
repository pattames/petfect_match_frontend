import { createContext, useState } from "react";

export const ChoiceContext = createContext();

export default function ChoiceContextProvider(props) {
  const [adopt, setAdopt] = useState(false);
  const [rehome, setRehome] = useState(false);

  return (
    <ChoiceContext.Provider value={{ adopt, setAdopt, rehome, setRehome }}>
      {props.children}
    </ChoiceContext.Provider>
  );
}
