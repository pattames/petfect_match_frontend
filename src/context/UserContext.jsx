import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export default function UserContextProvider(props) {
  // Get user from local storage
  const [user, setUser] = useState(null);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Fetched user using user._id
  const [fetchedUser, setFetchedUser] = useState({});

  useEffect(() => {
    try {
      // If user is not null and has an _id property
      if (user && user._id) {
        async function fetchUserData() {
          const response = await fetch(
            `http://localhost:8080/user/${user._id}`
          );
          const userData = await response.json();
          setFetchedUser(userData.data);
        }
        fetchUserData();
      }
    } catch (error) {
      console.log(error);
    }
  }, [user?._id, flag]); // Depend on user._id to refetch when it changes

  return (
    <UserContext.Provider value={{ setFlag, flag, user, setUser, fetchedUser }}>
      {props.children}
    </UserContext.Provider>
  );
}
