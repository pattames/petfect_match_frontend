import styles from "../css/PetDashCard.module.css";

export default function PetDashCard({ pet }) {
  //   console.log(pet);
  return (
    <div className={styles.card_container}>
      <div className={styles.img_container}>
        <img src={pet && pet.images[0] && pet.images[0].url} />
      </div>
      <div className={styles.info}>
        <h3>{pet.name}</h3>
        <div className={styles.bttns}>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
}
