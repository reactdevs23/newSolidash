import React from "react";
import styles from "./Services.module.css";
import {
  empoweringIdeas,
  craftingDigitalPresence,
  pioneeringFutureTechnologies,
  deliverResult,
} from "../../images";
const Service = () => {
  const allServices = [
    {
      icon: empoweringIdeas,
      title: "Cloud Solutions",
      info: "Tailored, scalable cloud services to enhance business efficiency and security.",
    },
    {
      icon: craftingDigitalPresence,
      title: "Custom Software Development",
      info: "Bespoke software solutions designed for robust performance and scalability.",
    },
    {
      icon: pioneeringFutureTechnologies,
      title: "Crypto Exchange Development",
      info: "Comprehensive, secure, and user-friendly cryptocurrency exchange platforms.",
    },
    {
      icon: deliverResult,
      title: "Blockchain Software Solutions:",
      info: "Secure, innovative blockchain software to revolutionize your digital transactions.",
    },
    {
      icon: empoweringIdeas,
      title: "Blockchain Consultancy",
      info: "Strategic insights and technical guidance to harness the power of blockchain technology.",
    },
    {
      icon: craftingDigitalPresence,
      title: "App Development:",
      info: "Innovative Android applications focused on user engagement and cutting-edge technology.",
    },
    {
      icon: pioneeringFutureTechnologies,
      title: "Platform as a servies",
      info: "Offering an innovative and user-friendly Platform as a Service for swift, one-click app launches",
    },
    {
      icon: deliverResult,
      title: "Marketing Services",
      info: "Providing comprehensive marketing strategies and solutions to amplify your brand's presence and reach.",
    },
  ];
  return (
    <section className={styles.wrapper} id="services">
      <div className={[styles.container, "container"].join(" ")}>
        <div className={styles.headingContainer}>
          <p className={styles.heading}>Our Services</p>
          <h2 className={styles.title}>Services we offer</h2>
          <p className={styles.details}>
            Get to know more about the services we offer
          </p>
        </div>

        <div className={styles.services}>
          {allServices.map((el, i) => (
            <div className={styles.card} key={i}>
              <img src={el.icon} alt="#" className={styles.icon} />
              <h3 className={styles.cardTitle}>{el.title}</h3>
              <p className={styles.info}>{el.info}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
