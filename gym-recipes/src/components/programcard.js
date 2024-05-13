import React from 'react';
import { Link } from 'react-router-dom';
import styles from '@/styles/styles.module.css';

const ProgramCard = ({ program }) => {
   
    return (
        <Link to={`/program/${program.id}`} className={styles.cardcontainer}>
        <div className={styles.card}>
          <img src={program.imageUrl} alt={program.name} className={styles.cardimage} />
          <div className={styles.container}>
            <h4><b>{program.name}</b></h4>
            <p>{program.description}</p>
          </div>
        </div>
      </Link>
    );
};

export default ProgramCard;