import React from "react";

import styles from "./Integration.module.css";
import { integrationImg, integrationMobileImg } from "../../../images";

const Integration = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.headingContainer}>
        <h4 className={styles.title}>Integrations</h4>
        <p className={styles.info}>
          We allow easy integrations with our API and resources can be found by
          clicking the get started link
        </p>
      </div>
      <img src={integrationImg} alt="#" className={styles.img} />
      <img src={integrationMobileImg} alt="#" className={styles.mobileImg} />
    </div>
  );
};

export default Integration;
