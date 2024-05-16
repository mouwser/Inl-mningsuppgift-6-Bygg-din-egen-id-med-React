import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '@/styles/openmodal.module.css';
import axios from 'axios';

const ProgramCard = ({ program }) => {
  const imageURL = program.imageURL;
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

        useEffect(() => {
            const token = localStorage.getItem('token');
            setIsLoggedIn(!!token);
        }, []);
    

  const handleDelete = async (event) => {
    event.stopPropagation();
    try {

      await axios.delete(`https://localhost:7109/api/Gymprograms/${program.programId}`);

      window.location.reload();
    } catch (error) {
      console.error(error);
    }

  };

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };



  return (

    <div className={styles.cardcontainer}>

      <div className={styles.card} onClick={handleOpenModal}>
        <img src={imageURL} alt={program.name} className={styles.cardimage} />
        <div className={styles.container}>
          <h4><b>{program.name.substring(0, 20)}</b></h4>
          <p>{program.description.substring(0, 20)}</p>
          {isLoggedIn && (
          <button onClick={handleDelete}>Delete</button>
          )}
        </div>
      </div>
      {isOpen && (
        <div className={styles.modal}>
          <div className={styles.modalcontent}>
            <span className={styles.close} onClick={handleCloseModal}>&times;</span>
            <h4><b>{program.name}</b></h4>
            <img src={imageURL} alt={program.name} />
            <p>{program.description}</p>
          </div>
        </div>
      )}
    </div>



  );
};

export default ProgramCard;