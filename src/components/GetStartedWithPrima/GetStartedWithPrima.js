import React from "react";
import styles from "./GetStartedWithPrima.module.css";

const GetStartedWithPrima = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.line}></div>
      <div className={styles.headingContainer}>
        <h2 className={styles.title}>Get Started with Prima</h2>
        <p className={styles.info}>
          Introducing Prima, SolidHash's premier service that revolutionizes the
          cryptocurrency landscape. With Prima, launching your own crypto
          exchange is a matter of minutes, not months. Our user-friendly
          platform empowers you with the tools to create a secure, robust, and
          fully customizable exchange, putting the power of digital currency
          trading at your fingertips.
        </p>{" "}
        <div className={styles.buttonContainer}>
          <button className={[styles.button].join(" ")}>Get started</button>
          <button className={[styles.button, styles.contactButton].join(" ")}>
            Contact
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStartedWithPrima;
