import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import PetDashCard from "./PetDashCard";
import styles from "../css/PetDash.module.css";
import AddPetCard from "./AddPetCard";
import { Link } from "react-router-dom";

export default function PetDash() {
  const [render, setRender] = useState(false);
  const [userPets, setUserPets] = useState();
  const { fetchedUser, user } = useContext(UserContext);

  useEffect(() => {
    setUserPets(fetchedUser.pets);
  }, [render, fetchedUser.pets]);

  return (
    <div>
      <div className={styles.dash_container}>
        {userPets &&
          userPets.map((pet) => (
            <PetDashCard
              key={pet._id}
              pet={pet}
              render={render}
              setRender={setRender}
            />
          ))}
        <Link to="/petprofile">
          <AddPetCard />
        </Link>
      </div>
    </div>
  );
}
