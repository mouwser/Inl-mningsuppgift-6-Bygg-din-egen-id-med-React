import React, { useState, useEffect } from 'react';
import Navbar from '@/components/navbar';
import styles from '@/styles/cards.module.css';
import ProgramCard from '@/components/mealplancard';
import Link from 'next/link';


const Mealplans = () => {
    const [mealplans, setMealplans] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newMealplan, setNewMealplan] = useState({ name: '', description: '', imageUrl: '' });
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        setIsLoggedIn(!!token);
    }, []);

    useEffect(() => {
        fetch('https://localhost:7109/api/Mealplans')
            .then(response => response.json())
            .then(data => setMealplans(data));
    }, []);

    const handleInputChange = (event) => {
        setNewMealplan({ ...newMealplan, [event.target.name]: event.target.value });
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        fetch('https://localhost:7109/api/Mealplans', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(newMealplan),
        })
            .then(response => response.json())
            .then(data => {
                setMealplans(prevMealplans => [...prevMealplans, data]);
                setIsModalOpen(false);
                setNewMealplan({ name: '', description: '', imageUrl: '' });
            });
    };

    return (
        <div>
            <Navbar />
            <h1 className={styles.h1}>Meal Plans</h1>
            <p className={styles.p}>Here you will find all the meal plans.</p>
            {isLoggedIn && (
            <button onClick={() => setIsModalOpen(true)} className={styles.addButton}>Add Meal Plan</button>
        )}
            {isModalOpen && (
                <div className={styles.modal}>
                    <span onClick={() => setIsModalOpen(false)} className={styles.closeButton}>&times;</span>
                    <form onSubmit={handleFormSubmit}>
                        <label>
                            Meal Plan Name:
                            <input type="text" name="name" value={newMealplan.name} onChange={handleInputChange} required />
                        </label>
                        <label>
                            Meal Plan Description:
                            <input type="text" name="description" value={newMealplan.description} onChange={handleInputChange} required />
                        </label>
                        <label>
                            Meal Plan Image URL:
                            <input type="text" name="imageUrl" value={newMealplan.imageUrl} onChange={handleInputChange} 
                                required pattern="https?://.+" title="Please enter a valid URL." />
                        </label>
                        <button type="submit">Add Meal Plan</button>
                    </form>
                </div>
            )}
            <div className={styles.cardcontainer}>
                {mealplans.map((mealplans, index) => (
                    <ProgramCard key={index} mealplans={mealplans} />
                ))}
            </div>
        </div>
    );
};

export default Mealplans;

















