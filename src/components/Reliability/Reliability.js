import React from "react";
import styles from "./Reliability.module.css";
import {
  gurantee,
  craftingDigitalPresence,
  pioneeringFutureTechnologies,
  deliverResult,
} from "../../images";
const Reliability = () => {
  const allServices = [
    {
      icon: gurantee,
      title: "Guaranteed on-schedule delivery.",
    },
    {
      icon: deliverResult,
      title: "Uncompromised code quality.",
    },
    {
      icon: craftingDigitalPresence,
      title: "Outstanding support, post-delivery.",
    },
    {
      icon: pioneeringFutureTechnologies,
      title: "Seamless post-launch assistance.",
    },
  ];
  return (
    <section className={styles.wrapper}>
      <div className={[styles.container, "container"].join(" ")}>
        <div className={styles.headingContainer}>
          <p className={styles.heading}>Reliability</p>
          <h2 className={styles.title}>Focus on aquiring your customers.</h2>
          <p className={styles.details}>
            We are your one stop partner for all your development needs!
          </p>
        </div>

        <div className={styles.services}>
          {allServices.map((el, i) => (
            <div className={styles.card} key={i}>
              <img src={el.icon} alt="#" className={styles.icon} />
              <h3 className={styles.cardTitle}>{el.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reliability;
