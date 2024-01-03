import React from "react";
import styles from "./WhatWeOffer.module.css";
import {
  empoweringIdeas,
  craftingDigitalPresence,
  pioneeringFutureTechnologies,
  deliverResult,
} from "../../../images";

const WhatWeOffer = () => {
  const data = [
    {
      icon: empoweringIdeas,
      title: "Empowering Ideas",
      info: "We turn your vision into digital reality.",
    },
    {
      icon: craftingDigitalPresence,
      title: "Crafting Digital Presence",
      info: "Elevate your online presence with our expertise.",
    },
    {
      icon: pioneeringFutureTechnologies,
      title: "Pioneering Future Technologies.",
      info: "Innovative solutions, one line of code at a time.",
    },
    {
      icon: deliverResult,
      title: "Beyond Development, We Deliver Results.",
      info: "Your success, our commitment – always.",
    },
  ];
  return (
    <div className={styles.offers}>
      {data.map((el, i) => (
        <div className={styles.card} key={i}>
          <img src={el.icon} alt="#" className={styles.icon} />
          <h3 className={styles.cardTitle}>{el.title}</h3>
          <p className={styles.info}>{el.info}</p>
        </div>
      ))}
    </div>
  );
};

export default WhatWeOffer;
