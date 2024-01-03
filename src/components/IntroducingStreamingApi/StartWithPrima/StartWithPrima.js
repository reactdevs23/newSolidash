import React from "react";
import styles from "./StartWithPrima.module.css";
import { chart } from "../../../images";

const StartWithPrima = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.headingContainer}>
        <h4 className={styles.title}>Get started with Prima</h4>
        <p className={styles.info}>
          We are giving a 1000$ bonus to get started!
        </p>
      </div>
      <div className={styles.imgAndButton}>
        <button className={styles.button}>
          <span className={styles.hightlight}>$1k </span>
          credit to get started
        </button>
      </div>
      <img src={chart} alt="#" className={styles.image} />
    </div>
  );
};

export default StartWithPrima;
