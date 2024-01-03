import React from "react";
import { FaArrowRight } from "react-icons/fa6";

import styles from "./HeroSection.module.css";
import { heroImg } from "../../images";
import WhatWeOffer from "./WhatWeOffer/WhatWeOffer";
const HeroSection = () => {
  return (
    <section className={styles.wrapper} id="hero">
      <div className={["container", styles.container].join(" ")}>
        <div className={styles.textContainer}>
          <p className={styles.tagline}>
            Unlocking Innovation, Crafting Excellence.
          </p>
          <h1 className={styles.title}>
            Welcome to Solidhash Where Code Meets Creativity.
          </h1>
          <div className={styles.buttonContainer}>
            <button className={[styles.button, styles.bookAMeeting].join(" ")}>
              Book a meeting
            </button>
            <button className={[styles.button, styles.solidhashSaas].join(" ")}>
              Solidhash SAAS <FaArrowRight className={styles.arrow} />
            </button>
          </div>
        </div>

        <div className={styles.imgContainer}>
          <img src={heroImg} alt="#" className={styles.img} />
        </div>
        <WhatWeOffer />
      </div>
    </section>
  );
};

export default HeroSection;
