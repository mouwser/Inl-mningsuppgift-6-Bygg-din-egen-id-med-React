import React from 'react';
import styles from '@/styles/styles.module.css';

const ProgramCard = ({ program }) => {
    return (
        <div className={styles.cardcontainer}>
            <div className={styles.card}>
                <img src={program.imageUrl} alt={program.name} className={styles.cardimage} />
                <div className={styles.container}>
                    <h4><b>{program.name}</b></h4>
                    <p>{program.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ProgramCard;