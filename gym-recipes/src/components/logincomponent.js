import React, { useState } from 'react';
import styles from '@/styles/login.module.css';

const LoginComponent = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
  };

  return (
    <div>
      <h1 className={styles.h1}>Login</h1>
      <div className={styles.loginaccountcontainer}>
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
        <div className={styles.buttoncontainer}>
        <input className={styles.secondbutton} type="submit" value="Login!" />
        </div>
      </form>
      </div>
      </div>
   
  );
};

export default LoginComponent;