import React from "react";
import styles from "./HistoricData.module.css";
import { chart } from "../../../images";

const HistoricData = () => {
  const tabs = ["10+ Networks", "99% less cost", "100% uptime"];
  return (
    <div className={styles.wrapper}>
      <div className={styles.headingContainer}>
        <h4 className={styles.title}>100TB+ of Historic data</h4>
        <p className={styles.info}>
          Our Database has 100+ TB of queriable history data for easy blockchain
          research and verification
        </p>
      </div>
      <div className={styles.imgAndButton}>
        <div className={styles.buttonContainer}>
          {tabs.map((el, i) => (
            <button className={styles.button} key={i}>
              {el}
            </button>
          ))}
        </div>
        <img src={chart} alt="#" className={styles.image} />
      </div>
    </div>
  );
};

export default HistoricData;
