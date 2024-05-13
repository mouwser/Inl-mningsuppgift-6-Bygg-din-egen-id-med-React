import React from 'react';
import Navbar from '@/components/navbar';
import styles from '@/styles/styles.module.css';
import ProgramCard from '@/components/programcard';

const Mealplans = () => {
    return (
        <div>
            <Navbar />{/*render the Navbar component*/}
            <h1 className={styles.h1}>Meal Plans</h1>
            <p className={styles.p}>Here you will find all the different meal plans.</p>
             {/* Add ProgramCards here */}
             
               
                
                
            </div>
        
    );
};

export default Mealplans;