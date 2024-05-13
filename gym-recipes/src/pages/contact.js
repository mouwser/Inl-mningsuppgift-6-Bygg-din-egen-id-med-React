import React from 'react';
import Navbar from '@/components/navbar';
import styles from '@/styles/styles.module.css';

const Contact = () => {
  return (
    <div>
      <Navbar />{/*render the Navbar component*/}
      <h1 className={styles.h1}>Contact Us</h1>
      <p className={styles.p}>Fill out the form below to get in touch with us.</p>
    </div>
  );
};

export default Contact;