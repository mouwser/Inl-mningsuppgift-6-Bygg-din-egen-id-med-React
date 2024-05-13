import React from 'react';
import Navbar from '@/components/navbar';
import styles from '@/styles/styles.module.css';

const About = () => {
  return (
    <div>
      <Navbar />{/*render the Navbar component*/}
      <h1 className={styles.h1}>About Gym Recipes</h1>
        <h2 className={styles.h2}>About Us</h2>
        <div className={styles.aboutcontainer}>
          <p className={styles.text}>Welcome to GymRecipes, your ultimate platform for fitness and nutrition programs! 
          We are a passionate team dedicated to providing a seamless and effective solution for your health goals.</p>
        </div>
        <h2 className={styles.h2}>Our Story</h2>
        <div className={styles.aboutcontainer}>
          <p className={styles.text}>GymRecipes was founded by Johannes Johansson WU23 2024 with a vision to revolutionize 
          the accessibility and effectiveness of fitness and nutrition programs. Johannes recognized the need for a platform 
          that brings together workout and meal plans in one place, accessible to everyone regardless of experience level. 
          He saw that many people struggled to find suitable programs and wanted to make the process smoother and more motivating.</p>
        </div>
        <h2 className={styles.h2}>Our Value Proposition</h2>
        <div className={styles.aboutcontainer}>
          <p className={styles.text}>We offer a centralized platform where you can find both workout and meal programs, 
          saving you time and frustration from searching on different sites. With our personalization, 
          you get tailored programs that take into account your individual needs and goals. 
          We believe in keeping motivation high through clear milestones and rewards along the way.</p>
        </div>
        <h2 className={styles.h2}>Our Target Audience</h2>
        <div className={styles.aboutcontainer}>
          <p className={styles.text}>GymRecipes caters to anyone striving to improve their health and fitness through exercise and dietary changes. 
          Whether you're a beginner or experienced, young or old, have specific health goals, or seek personalized adaptation and support, 
          GymRecipes is here for you.</p>
        </div>
        <h2 className={styles.h2}>Our Belief</h2>
        <div className={styles.aboutcontainer}>
          <p className={styles.text}>We believe in offering simplicity, efficiency, 
          and personal attention to make your journey to a healthier lifestyle as smooth and rewarding as possible. 
          With GymRecipes by your side, you can take control of your health and reach your fitness goals in a sustainable way.
        </p>
        </div>
        <h2 className={styles.h2}>Thank you for choosing GymRecipes - your partner for a healthier future!</h2>
        
    </div>
  );
};

export default About;