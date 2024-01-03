import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Testimoinals.module.css";

const Testimoinals = () => {
  const data = [
    {
      comment:
        "The speed with which tasks were completed and the support from their end was something that really impressed me.",
      name: "Miranda de Vries",
      position: "CEO, Dtails",
    },
    {
      comment:
        "The speed with which tasks were completed and the support from their end was something that really impressed me.",
      name: "Miranda de Vries",
      position: "CEO, Dtails",
    },
    {
      comment:
        "The speed with which tasks were completed and the support from their end was something that really impressed me.",
      name: "Miranda de Vries",
      position: "CEO, Dtails",
    },
    {
      comment:
        "The speed with which tasks were completed and the support from their end was something that really impressed me.",
      name: "Miranda de Vries",
      position: "CEO, Dtails",
    },
    {
      comment:
        "The speed with which tasks were completed and the support from their end was something that really impressed me.",
      name: "Miranda de Vries",
      position: "CEO, Dtails",
    },
    {
      comment:
        "The speed with which tasks were completed and the support from their end was something that really impressed me.",
      name: "Miranda de Vries",
      position: "CEO, Dtails",
    },
    {
      comment:
        "The speed with which tasks were completed and the support from their end was something that really impressed me.",
      name: "Miranda de Vries",
      position: "CEO, Dtails",
    },
    {
      comment:
        "The speed with which tasks were completed and the support from their end was something that really impressed me.",
      name: "Miranda de Vries",
      position: "CEO, Dtails",
    },
    {
      comment:
        "The speed with which tasks were completed and the support from their end was something that really impressed me.",
      name: "Miranda de Vries",
      position: "CEO, Dtails",
    },
    {
      comment:
        "The speed with which tasks were completed and the support from their end was something that really impressed me.",
      name: "Miranda de Vries",
      position: "CEO, Dtails",
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    centerMode: true,

    arrows: false,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className={styles.wrapper}>
      {" "}
      <div className={styles.headingContainer}>
        <p className={styles.heading}>Testimonials</p>
        <h2 className={styles.title}>Loved by entrepreneursr</h2>
        <p className={styles.info}>Here’s what people are saying about us</p>
      </div>
      <Slider {...settings}>
        {data.map((el, i) => (
          <div className={styles.testimonialContainer} key={i}>
            <div className={styles.testimonial}>
              <p className={styles.comment}>{el.comment}</p>
              <p className={styles.name}>{el.name}</p>
              <p className={styles.position}>{el.position}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimoinals;
