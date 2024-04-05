import styles from "./DogSpinner.module.css";

function DogSpinner() {
  return (
    <>
      <div className={styles.loader}>
        <div className={styles.dog}>
          <h1 className={styles.loader_title}>Woof a moment please!</h1>
          <div className={styles.dogbody}>
            <div className={styles.dogtail}>
              <div className={styles.dogtail}>
                <div className={styles.dogtail}>
                  <div className={styles.dogtail}>
                    <div className={styles.dogtail}>
                      <div className={styles.dogtail}>
                        <div className={styles.dogtail}>
                          <div className={styles.dogtail}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.dogtorso}></div>
          <div className={styles.doghead}>
            <div className={styles.dogears}>
              <div className={styles.dogear}></div>
              <div className={styles.dogear}></div>
            </div>
            <div className={styles.dogeyes}>
              <div className={styles.dogeye}></div>
              <div className={styles.dogeye}></div>
            </div>
            <div className={styles.dogmuzzle}>
              <div className={styles.dogtongue}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DogSpinner;
