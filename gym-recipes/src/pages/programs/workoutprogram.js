import React, { useState, useEffect } from 'react';
import Navbar from '@/components/navbar';
import styles from '@/styles/cards.module.css';
import ProgramCard from '@/components/programcard';
import Link from 'next/link';


    const Workoutprogram = () => {
        const [programs, setPrograms] = useState([]);
        const [isModalOpen, setIsModalOpen] = useState(false);
        const [newProgram, setNewProgram] = useState({ name: '', description: '', imageUrl: '' });
        const [isLoggedIn, setIsLoggedIn] = useState(false);

        useEffect(() => {
            const token = localStorage.getItem('token');
            setIsLoggedIn(!!token);
        }, []);
    
        useEffect(() => {
            fetch('https://localhost:7109/api/Gymprograms')
                .then(response => response.json())
                .then(data => setPrograms(data));
        }, []);
    
        const handleInputChange = (event) => {
            setNewProgram({ ...newProgram, [event.target.name]: event.target.value });
        };
    
        const handleFormSubmit = (event) => {
            event.preventDefault();
    
            fetch('https://localhost:7109/api/Gymprograms', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(newProgram),
            })
            .then(response => response.json())
            .then(data => {
                setPrograms(prevPrograms => [...prevPrograms, data]);
                setIsModalOpen(false);
                setNewProgram({ name: '', description: '', imageUrl: '' });
            });
                };

                
    
        return (
            <div>
                <Navbar />
                <h1 className={styles.h1}>Workout programs</h1>
                <p className={styles.p}>Here you will find all the workout programs.</p>
                {isLoggedIn && (
                <button onClick={() => setIsModalOpen(true)} className={styles.addButton}>Add Program</button>
            )}  
                {isModalOpen && (
                    <div className={styles.modal}>
                        <span onClick={() => setIsModalOpen(false)} className={styles.closeButton}>&times;</span>
                        <form onSubmit={handleFormSubmit}>
                            <label>
                                Program Name:
                                <input type="text" name="name" value={newProgram.name} onChange={handleInputChange} required />
                            </label>
                            <label>
                                Program Description:
                                <textarea type="text" name="description" className={styles.description} value={newProgram.description} onChange={handleInputChange} required />
                            </label>
                            <label>
                                Program Image URL:
                                <input type="text" name="imageURL" value={newProgram.imageURL} onChange={handleInputChange} 
                                required pattern="https?://.+" title="Please enter a valid URL." />
                            </label>
                            <button type="submit">Add Program</button>
                        </form>
                    </div>
                )}
                <div className={styles.cardcontainer}>
                    {programs.map((program, index) => (
                        <ProgramCard key={index} program={program} />
                    ))}
                </div>
            </div>
        );
    };
    
    export default Workoutprogram;