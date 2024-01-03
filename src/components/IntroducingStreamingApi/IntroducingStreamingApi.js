import React from "react";
import styles from "./IntroducingStreamingApi.module.css";
import RealTimeEventUpdate from "./RealTimeEventUpdate/RealTimeEventUpdate";
import HistoricData from "./HistoricData/HistoricData";
import StartWithPrima from "./StartWithPrima/StartWithPrima";
import Integration from "./Integration/Integration";

const IntroducingStreamingApi = () => {
  return (
    <section className={styles.wrapper}>
      <div className={[styles.container, "container"].join(" ")}>
        <div className={styles.headingContainer}>
          <p className={styles.heading}>Other features</p>
          <h2 className={styles.title}>Introducing Streams API</h2>
        </div>
        <div className={styles.myWrapper}>
          <div className={styles.topSection}>
            <RealTimeEventUpdate />
            <HistoricData />
          </div>{" "}
          <div className={styles.bottomSection}>
            <StartWithPrima />
            <Integration />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroducingStreamingApi;
