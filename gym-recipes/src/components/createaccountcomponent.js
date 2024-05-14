import React, { useState } from 'react';
import styles from '@/styles/login.module.css';

const CreateAccountComponent = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
  };

  return (
    <div>
      <h1 className={styles.h1}>Create Account</h1>
      <div className={styles.createaccountcontainer}>  
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input className={styles.username} type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input className={styles.password} type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <label>
          Confirm Password:
          <input className={styles.password} type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </label>
        <div className={styles.buttoncontainer}>
        <input className={styles.button} type="submit" value="Create Account" />
        </div>
      </form>
      </div>
    </div>
  );
};

export default CreateAccountComponent;