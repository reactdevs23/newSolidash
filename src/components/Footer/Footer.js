import React from "react";
import { FiInstagram } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

import styles from "./Footer.module.css";
import { logo } from "../../images";
import { Link } from "react-scroll";

const Footer = () => {
  const socials = [
    { icon: <FiInstagram className={styles.icon} />, to: "#" },
    { icon: <FaGithub className={styles.icon} />, to: "#" },
    { icon: <BsTwitterX className={styles.icon} />, to: "#" },
  ];
  return (
    <section className={[styles.wrapper, "container"].join(" ")}>
      <div className={styles.topSection}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="#" className={styles.logo} />
          <h4 className={styles.logoText}>Callous</h4>
        </div>
        <div className={styles.itemsWrapper}>
          <div className={styles.items}>
            <p className={styles.heading}>Product</p>

            <Link
              className={styles.item}
              to="feature"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              activeStyle={{ color: "#00BD43" }}
            >
              Features
            </Link>

            <Link
              className={styles.item}
              to="pricing"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              activeStyle={{ color: "#00BD43" }}
            >
              Pricing
            </Link>
          </div>
          <div className={styles.items}>
            <p className={styles.heading}>Company</p>
            <Link
              className={styles.item}
              to="hero"
              spy={true}
              smooth={true}
              offset={-300}
              duration={500}
              activeStyle={{ color: "#00BD43" }}
            >
              Homepage
            </Link>
            <Link
              className={styles.item}
              to="about"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              activeStyle={{ color: "#00BD43" }}
            >
              About
            </Link>
          </div>{" "}
          <div className={styles.items}>
            <p className={styles.heading}>Talk to us</p>
            <a href="mailto:info@solidhash.io" className={styles.item}>
              info@solidhash.io
            </a>{" "}
            <button className={styles.item}>Book a meeting</button>
          </div>
        </div>
      </div>
      <div className={styles.bottomSection}>
        <div className={styles.textWrapper}>
          {" "}
          <p className={styles.text}>Callous, LLC. All rights reserved.</p>
          <a href="#/" target="_blank" rel="noreferrer" className={styles.text}>
            Privacy Policy
          </a>{" "}
          <a href="#/" target="_blank" rel="noreferrer" className={styles.text}>
            Terms of Conditions
          </a>
        </div>
        <div className={styles.socials}>
          {socials.map((el, i) => (
            <a href="#/" target="_blank" rel="noreferrer" key={i}>
              {el.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
