import React, { useRef } from "react";
import { useInView } from "react-intersection-observer";
import styles from "../css/IconsGrid.module.css";
import classNames from "classnames";

import "animate.css";

export default function IconsGrid() {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <div className={styles.gridContainer}>
      <div className={styles.gridItem}>
        <img src="/dog_icon.svg" className={styles.image}></img>
      </div>

      <div className={styles.gridItem}>
        <img src="/cat_icon.svg" className={styles.image}></img>
      </div>

      <div className={styles.gridItem}>
        <img src="/hand_icon.svg" className={styles.image}></img>
      </div>

      <div className={styles.gridItem}>
        <img src="/money_icon.svg" className={styles.image}></img>
      </div>

      <div
        ref={ref}
        className={classNames(
          styles.gridItem
          //   , "animate__animated", {
          //   animate__fadeInUp: inView,
          // }
        )}
      >
        I'd like to adopt a dog
      </div>

      <div
        ref={ref}
        className={classNames(
          styles.gridItem
          //   , "animate__animated", {
          //   animate__fadeInUp: inView,
          // }
        )}
      >
        I am more of a cat person
      </div>

      <div
        ref={ref}
        className={classNames(
          styles.gridItem
          //   , "animate__animated", {
          //   animate__fadeInUp: inView,
          // }
        )}
      >
        I am interested in volunteering{" "}
      </div>

      <div
        ref={ref}
        className={classNames(
          styles.gridItem
          //   , "animate__animated", {
          //   animate__fadeInUp: inView,
          // }
        )}
      >
        I'd like to save a life
      </div>
    </div>
  );
}
