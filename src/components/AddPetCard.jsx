import styles from "../css/AddPetCard.module.css";

export default function AddPetCard() {
  return (
    <div className={styles.container}>
      <span className={styles.plus}>+</span>
      <br />
      <h2>Add new pet</h2>
    </div>
  );
}
