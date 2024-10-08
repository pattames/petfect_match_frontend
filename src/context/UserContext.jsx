import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export default function UserContextProvider(props) {
  // Get user from local storage
  const [user, setUser] = useState(null);
  const [flag, setFlag] = useState(false);
  const [currentUser, setCurrentUser] = useState([]);

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
            // `http://localhost:8080/user/${user._id}`
            `https://purrfect-backend-hsd1.onrender.com/user/${user._id}`
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

  //Get current user

  const api = `https://purrfect-backend-hsd1.onrender.com/user/${user?._id}`;

  useEffect(() => {
    async function getCurrentUser() {
      try {
        const res = await fetch(api);
        const resData = await res.json();
        setCurrentUser(resData.data);
      } catch (error) {
        console.log(error);
      }
    }
    if (user) {
      getCurrentUser();
    }
  }, [user]);

  return (
    <UserContext.Provider
      value={{ setFlag, flag, user, setUser, fetchedUser, currentUser }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
