import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '@/styles/openmodal.module.css';
import axios from 'axios';

const ProgramCard = ({ program }) => {
  const imageURL = program.imageURL;
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editedProgram, setEditedProgram] = useState({ name: '', description: '', imageURL: '' });


  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);


  const handleDelete = async (event) => {
    event.stopPropagation();
    if (window.confirm('Are you sure you want to delete this program?')) {
      const token = localStorage.getItem('token');
      try {
        await axios.delete(`https://localhost:7109/api/Gymprograms/${program.programId}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        window.location.reload();
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleEdit = (event) => {
    event.stopPropagation();
    setEditedProgram({ name: program.name, description: program.description, imageURL: imageURL });
    setEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setEditModalOpen(false);
  };
  

  const handleSave = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem('token');
    try {
      await axios.put(`https://localhost:7109/api/Gymprograms/${program.programId}`, editedProgram, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (event) => {
    setEditedProgram({
      ...editedProgram,
      [event.target.name]: event.target.value
    });
  };



  return (
    <div className={styles.cardcontainer}>


      <div className={styles.card} onClick={handleOpenModal}>
        <img src={imageURL} alt={program.name} className={styles.cardimage} />
        <div className={styles.container}>
          <h4><b>{program.name.substring(0, 20)}</b></h4>
          <p>{program.description.substring(0, 20)}</p>
          {isLoggedIn && (
            <div>
              <button className={styles.delete} onClick={handleDelete}>Delete</button>
              <button className={styles.edit} onClick={handleEdit}>Edit</button>

            </div>
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
         {editModalOpen && (
          <div className={styles.modal}>
              <span onClick={() => setEditModalOpen(false)} className={styles.closeButton}>&times;</span>
              <form onSubmit={handleSave}>
                  <label>
                      Meal Plan Name:
                      <input type="text" name="name" value={editedProgram.name} onChange={handleInputChange} required />
                  </label>
                  <label>
                      Meal Plan Description:
                      <textarea type="text" name="description" className={styles.description} value={editedProgram.description} onChange={handleInputChange} required />
                  </label>
                  <label>
                      Meal Plan Image URL:
                      <input type="text" name="imageURL" value={editedProgram.imageURL} onChange={handleInputChange}
                          required pattern="https?://.+" title="Please enter a valid URL." />
                  </label>
                  <button type="submit">Save Changes</button>
              </form>
          </div>
      )}
     

    </div>




  );
};

export default ProgramCard;