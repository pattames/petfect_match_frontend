import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import PetDashCard from "./PetDashCard";
import styles from "../css/PetDash.module.css";
import AddPetCard from "./AddPetCard";

export default function PetDash() {
  const { fetchedUser, user } = useContext(UserContext);
  console.log(user);
  const userPets = fetchedUser.pets;
  // console.log(userPets);

  return (
    <div className={styles.dash_container}>
      {userPets && userPets.map((pet) => <PetDashCard pet={pet} />)}
      <AddPetCard />
    </div>
  );
}
