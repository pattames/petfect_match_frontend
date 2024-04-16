import styles from "../css/PetDashCard.module.css";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";

export default function PetDashCard({ pet, render, setRender }) {
  //   console.log(pet);
  const { user, flag, setFlag } = useContext(UserContext);

  //Delete a pet
  const handleDelete = async () => {
    if (window.confirm(`Are you sure you want to delete ${pet.name}?`)) {
      try {
        const response = await fetch(`http://localhost:8080/pets/${pet._id}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        const data = await response.json();
        if (response.ok) {
          alert("Pet deleted successfully!");
          setFlag(!flag);
        } else {
          throw new Error(data.message || "Failed to delete the pet.");
        }
      } catch (error) {
        alert(`Error: ${error.message}`);
      }
    }
  };

  return (
    <div className={styles.card_container}>
      <div className={styles.img_container}>
        <img src={pet && pet.images[0] && pet.images[0].url} />
      </div>
      <div className={styles.info}>
        <h3>{pet.name}</h3>
        <div className={styles.bttns}>
          <button>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
}
