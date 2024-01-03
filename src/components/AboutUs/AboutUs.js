import React from "react";
import styles from "./AboutUs.module.css";
const AboutUs = () => {
  return (
    <section className={styles.wrapper} id="about">
      <div className={[styles.container, "container"].join(" ")}>
        <div className={styles.headingContainer}>
          <p className={styles.heading}>About us</p>
          <h2 className={styles.title}>Where Vision Meets Precision</h2>
        </div>

        <div className={styles.detailsContainer}>
          <p className={styles.details}>
            At SolidHash, we're unlocking innovation and crafting excellence in
            the blockchain arena. As a leading blockchain development firm, we
            blend technical prowess with creativity, delivering bespoke
            solutions that transform complexities into elegant outcomes.
            Committed to excellence and innovation, we empower our clients by
            turning ambitious visions into reality. Join us at the forefront of
            blockchain technology, where code meets creativity.
          </p>
          <p className={styles.details}>
            {" "}
            Our team of experts is dedicated to staying at the cutting edge of
            blockchain technology, ensuring that every project we undertake is
            executed with the utmost quality and innovation
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
