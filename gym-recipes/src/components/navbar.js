import React from 'react';
import Link from 'next/link';
import styles from '@/styles/navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
    <ul className={styles.navList}>
      <li className={styles.navItem}>
        <Link href="/">
          <div className={styles.navLink}>Home</div>
        </Link>
      </li>
      <li className={styles.navItem}>
        <Link href="/workoutprogram">
          <div className={styles.navLink}>Workout Programs</div>
        </Link>
      </li>
      <li className={styles.navItem}>
        <Link href="/mealplans">
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
    </ul>
  </nav>
  );
};

export default Navbar;