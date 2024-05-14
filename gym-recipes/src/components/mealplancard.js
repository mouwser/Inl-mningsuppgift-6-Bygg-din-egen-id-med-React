import React, { useState } from 'react';
import Link from 'next/link';
import styles from '@/styles/openmodal.module.css';
import axios from 'axios';

const MealplansCard = ({ mealplans }) => {
    const imageURL = mealplans.imageURL;
    const [isOpen, setIsOpen] = useState(false);


    const handleDelete = async (event) => {
        event.stopPropagation();
        try {

            await axios.delete(`https://localhost:7109/api/Mealplans/${mealplans.mealId}`);

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
                <img src={imageURL} alt={mealplans.name} className={styles.cardimage} />
                <div className={styles.container}>
                    <h4><b>{mealplans.name.substring(0, 20)}</b></h4>
                    <p>{mealplans.description.substring(0, 20)}</p>
                    <button onClick={handleDelete}>Delete</button>
                </div>
            </div>

            {isOpen && (
                <div className={styles.modal}>
                    <div className={styles.modalcontent}>
                        <span className={styles.close} onClick={handleCloseModal}>&times;</span>
                        <h4><b>{mealplans.name}</b></h4>
                        <img src={imageURL} alt={mealplans.name} />
                        <p>{mealplans.description}</p>
                    </div>
                </div>
            )}
        </div>


    );
};

export default MealplansCard;