import React from "react";
import styles from "./InSight.module.css";
import {
  demandDrivenAdjustmentImg,
  insight,
  realTimeDevelopementTrackingImg,
} from "../../images";
const InSight = () => {
  return (
    <section className={styles.wrapper}>
      <div className={[styles.container, "container"].join(" ")}>
        <div className={styles.headingContainer}>
          <img src={insight} alt="#" className={styles.icon} />
          <h2 className={styles.title}>Insight </h2>
          <p className={styles.info}>
            Stay on the cutting edge of development with Insight, our innovative
            tool that provides real-time insights into your project's progress.
          </p>
        </div>

        <div className={styles.cards}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>
              <span className={styles.highlight}>
                Real-Time Development Tracking.
              </span>{" "}
              Monitor your project's evolution with precision, as InsightEdge
              tracks and displays development updates instantly, keeping you
              informed at every stage.
            </h3>
            <img
              src={realTimeDevelopementTrackingImg}
              alt="#"
              className={styles.realTimeDevelovementTrackingImg}
            />
          </div>{" "}
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>
              <span className={styles.highlight}>
                Demand-Driven Adjustments.
              </span>{" "}
              Empower your team to make on-the-fly corrections with Insight’s
              demand-driven features, ensuring your project stays aligned with
              your vision and adapts to changing needs efficiently.
            </h3>
            <img
              src={demandDrivenAdjustmentImg}
              alt="#"
              className={styles.demandDrivenImg}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InSight;
