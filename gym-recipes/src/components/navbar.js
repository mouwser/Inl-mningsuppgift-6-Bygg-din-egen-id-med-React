import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import styles from '@/styles/navbar.module.css';


const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);

  };

 

  return (
    <nav className={styles.navbar}>
      <button className={styles.toggleButton} onClick={toggleDropdown}>
        ☰
      </button>
      <ul className={`${styles.navList} ${showDropdown ? styles.showDropdown : ''}`}>
        <li className={styles.navItem}>
          <Link href="/">
            <div className={styles.navLink}>Home</div>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/programs/workoutprogram">
            <div className={styles.navLink}>Workout Programs</div>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/programs/mealplans">
            <div className={styles.navLink}>Meal Plans</div>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/about">
            <div className={styles.navLink}>About Us</div>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/contact">
            <div className={styles.navLink}>Contact</div>
          </Link>
        </li>
        <li className={styles.navItem}>
           <Link href="/login">
            <div className={styles.navLinklogin}>Login/Create Account</div>
         </Link>
</li>
        </ul>
    </nav>
  );
};

export default Navbar;