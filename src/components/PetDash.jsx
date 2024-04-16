import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import PetDashCard from "./PetDashCard";
import styles from "../css/PetDash.module.css";
import AddPetCard from "./AddPetCard";

export default function PetDash() {
  const [render, setRender] = useState(false);
  const [userPets, setUserPets] = useState();
  const { fetchedUser, user } = useContext(UserContext);

  useEffect(() => {
    setUserPets(fetchedUser.pets);
  }, [render, fetchedUser.pets]);

  // console.log(user);
  // console.log(userPets);

  return (
    <div className={styles.dash_container}>
      {userPets &&
        userPets.map((pet) => (
          <PetDashCard pet={pet} render={render} setRender={setRender} />
        ))}
      <AddPetCard />
    </div>
  );
}
