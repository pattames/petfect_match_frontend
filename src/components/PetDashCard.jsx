import styles from "../css/PetDashCard.module.css";
import { UserContext } from "../context/UserContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

export default function PetDashCard({ pet }) {
  //   console.log(pet);
  const { user, flag, setFlag } = useContext(UserContext);
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate("/updatepet", { state: { pet } });
  };

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
    <>
      <div className={styles.card_container}>
        <div className={styles.imgContainer}>
          <img src={pet && pet.images[0] && pet.images[0].url} />
        </div>

        <p className={styles.title}>{pet.name}</p>

        <div className={styles.bttns}>
          <button onClick={handleEdit}>
            <FontAwesomeIcon icon={faEdit} />
            <span>Edit</span>
          </button>

          <button onClick={handleDelete}>
            <FontAwesomeIcon icon={faTrashAlt} />
            <span>Delete</span>
          </button>
        </div>
      </div>
    </>
  );
}
