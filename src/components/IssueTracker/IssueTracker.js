import React from "react";
import styles from "./IssueTracker.module.css";
import { blur, issueTracker, issueTrackerMainImg } from "../../images";

const IssueTracker = () => {
  return (
    <section className={styles.wrapper}>
      <div className={[styles.container, "container"].join(" ")}>
        <div className={styles.headingContainer}>
          <img src={issueTracker} alt="#" className={styles.icon} />
          <h2 className={styles.title}>Issues tracker </h2>
          <p className={styles.info}>
            Mauris massa arcu, dapibus sed fringilla at, suscipit quis diam.
            Nulla malesuada nulla accumsan mattis rhoncus.
          </p>
        </div>
        <div className={styles.imageContainer}>
          <img src={issueTrackerMainImg} alt="#" className={styles.image} />
          <img src={blur} alt="#" className={styles.blur} />
        </div>
        <p className={styles.tagline}>
          Sed viverra ligula sit amet sagittis sollicitudin. Nam arcu dolor,
          lacinia ut gravida non, fringilla suscipit sem. Quisque vehicula velit
          sapien, vel accumsan quam tempor ac.
        </p>
      </div>
    </section>
  );
};

export default IssueTracker;
