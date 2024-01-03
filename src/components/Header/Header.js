import React, { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

import styles from "./Header.module.css";

import { Link } from "react-scroll";
import { logo } from "../../images";

const Header = () => {
  const navItems = [
    { navItem: "Home", to: "hero" },
    { navItem: "Pricing", to: "pricing" },
    { navItem: "services", to: "services" },

    { navItem: "About", to: "about" },
  ];
  const [sidebar, setSidebar] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 90) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={[styles.wrapper, isScrolled && styles.wrapperBg].join(" ")}>
      <header className={[styles.header, "container"].join(" ")}>
        <Link
          className={[styles.navItem, styles.logoContainer].join(" ")}
          to="hero"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          onClick={() => setSidebar((prev) => !prev)}
        >
          <img src={logo} alt="#" className={styles.logo} />
          <h4 className={styles.logoText}>Solidhash</h4>
        </Link>

        <div className={styles.navItemsAndButton}>
          <div
            className={[styles.navItems, sidebar && styles.sidebar].join(" ")}
          >
            {navItems.map((el, i) => (
              <Link
                key={i}
                className={styles.navItem}
                to={el.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                activeStyle={{ color: "#fff" }}
                onClick={() => setSidebar((prev) => !prev)}
              >
                {el.navItem}
              </Link>
            ))}
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.button}>Get started</button>{" "}
            {sidebar ? (
              <div className={styles.iconContainer}>
                <IoMdClose
                  className={styles.icon}
                  onClick={() => setSidebar((prev) => !prev)}
                />
              </div>
            ) : (
              <div className={styles.iconContainer}>
                <RxHamburgerMenu
                  className={styles.icon}
                  onClick={() => setSidebar((prev) => !prev)}
                />{" "}
              </div>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
