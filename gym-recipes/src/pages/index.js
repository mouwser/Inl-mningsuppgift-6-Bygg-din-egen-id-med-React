import React from 'react';
import Navbar from '@/components/navbar';
import styles from '@/styles/styles.module.css';

const Home = () => {
  return (
    <div>
        <Navbar />{/*render the Navbar component*/}
        <h1 className={styles.h1}>Welcome to Gym Recipes!</h1>
        <p className={styles.p}>Here you will find all the recipes you need to get in shape and stay healthy.</p>
        <div className={styles.backgroundcontainer}>
        <img className={styles.backgroundimg} src='Gymrecipes.png'></img>
        </div>
    </div>
   
  );
};

export default Home;