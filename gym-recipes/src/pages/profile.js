import React from 'react';
import Navbar from '@/components/navbar';
import styles from '@/styles/styles.module.css';

const Profile = () => {
  return (
    <div>
        <Navbar />{/*render the Navbar component*/}
        <h1 className={styles.h1}>Welcome to your Profile!</h1>
        <p className={styles.p}>Here you will find all the .</p>
        
        </div>
    
   
  );
};

export default Profile;