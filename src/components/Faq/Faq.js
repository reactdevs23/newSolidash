import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

import styles from "./Faq.module.css";

const Faq = () => {
  const [active, setActive] = useState(2);
  const faqArray = [
    {
      question: "Which plan is best for me?",
      answer:
        "Known for our speed and accuracy. Develop solutions that take your product to the next level.",
    },

    {
      question: "How do I upgrade or make changes to my account’s plan?",
      answer:
        "Known for our speed and accuracy. Develop solutions that take your product to the next level.",
    },
    {
      question: "Is there a guarantee?",
      answer:
        "Known for our speed and accuracy. Develop solutions that take your product to the next level.",
    },
    {
      question:
        "I don’t see an integration listed for one of my apps, can I still use Callous?",
      answer:
        "Known for our speed and accuracy. Develop solutions that take your product to the next level.",
    },
  ];
  return (
    <section className={styles.wrapper}>
      <div className={styles.headingContainer}>
        <p className={styles.heading}>FAQ</p>
        <h2 className={styles.title}>Frequently asked questions</h2>
      </div>
      <div className={[styles.faqWrapper].join(" ")}>
        {faqArray.map((items, index) => (
          <div
            className={styles.faqContainer}
            key={index}
            onClick={() => setActive(index)}
          >
            <div className={styles.questionWrapper}>
              <p className={styles.question}>{items.question}</p>
              {active === index ? (
                <FiMinus className={[styles.icon, styles.minus].join(" ")} />
              ) : (
                <FiPlus className={styles.icon} />
              )}
            </div>
            {active === index && (
              <p className={`${styles.answer} ${styles.question}`}>
                {items.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
