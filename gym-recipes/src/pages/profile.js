import React,  { useEffect, useState } from 'react';
import Navbar from '@/components/navbar';
import styles from '@/styles/styles.module.css';

const Profile = () => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    if (storedEmail) {
      setEmail(storedEmail);
    } else {
      console.log('No email found in local storage');
    }
  }, []);
  return (
    <div>
        <Navbar />{/*render the Navbar component*/}
        <h1 className={styles.h1}>Welcome to your profile {email}!</h1>
        <p className={styles.p}>........</p>
        
        </div>
    
   
  );
};

export default Profile;