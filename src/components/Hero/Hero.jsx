import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Anay Maurya</h1>
        <p className={styles.description}>
          I'm a 3rd year BCA student and aspiring Data Science and Machine Leaning enthusiast who is currently learning and innovating.
        </p>
        <a
          href="https://drive.google.com/file/d/1YeQ9FLokgFPD0vpUTYo0sF5TBoC6wxxB/view?usp=drive_link" // Update this path to the actual path of your resume file
          className={styles.contactBtn}
          download // This attribute triggers the download
        >
          Download CV/Resume
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
