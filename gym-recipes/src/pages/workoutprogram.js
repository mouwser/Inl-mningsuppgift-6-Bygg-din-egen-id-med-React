import React, { useStatefrom } from 'react';
import Navbar from '@/components/navbar';
import styles from '@/styles/styles.module.css';
import ProgramCard from '@/components/programcard';

const Workoutprogram = () => {
    return (
        <div>
            <Navbar />{/*render the Navbar component*/}
            <h1 className={styles.h1}>Workout programs</h1>
            <p className={styles.p}>Here you will find all the workout programs.</p>
              {/* Add ProgramCards here */}
              <div className={styles.cardcontainer}>
                <ProgramCard program={{ name: "Weightlifting", description: "Build strength and muscle mass with our weightlifting program..", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e3/TwoDumbbells.JPG" }} />
                <ProgramCard program={{ name: "Yoga", description: "Relax and improve flexibility with our yoga program.", imageUrl: "https://cdn.medley.se/uploads/86ccb92a-6ce3-404c-9caa-d51ed420f46c__36ff3d2ec6e42fc137394a0d206c6d1b807d36e7.jpeg" }} />
                
                
            </div>
        </div>
   
            
    );
};


export default Workoutprogram;