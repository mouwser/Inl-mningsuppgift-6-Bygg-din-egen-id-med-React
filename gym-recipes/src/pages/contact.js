import React from 'react';
import Navbar from '@/components/navbar';
import styles from '@/styles/styles.module.css';

const Contact = () => {
  return (
    <div>
      <Navbar />{/*render the Navbar component*/}
      <h1 className={styles.h1}>Contact Us</h1>
      <p className={styles.p}>Fill out the form below to get in touch with us.</p>
      <form className={styles.form}>
        <div className={styles.inputGroup}>
          <label>
            Name:
          </label>
          <input type="text" name="name" />
        </div>
        <div className={styles.inputGroup}>
          <label>
            Email:
          </label>
          <input type="email" name="email" />
        </div>
        <div className={styles.inputGroup}>
          <label>
            Message:
          </label>
          <textarea name="message" />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Contact;