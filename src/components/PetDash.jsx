import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function PetDash() {
  const { fetchedUser, user } = useContext(UserContext);
  // console.log(user);
  const userPets = fetchedUser.pets;

  console.log(userPets);

  return (
    <>{userPets && userPets.map((pet) => <img src={pet.images[0].url} />)}</>
  );
}
