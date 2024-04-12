import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export default function UserContextProvider(props) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    if (!user) {
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
}
