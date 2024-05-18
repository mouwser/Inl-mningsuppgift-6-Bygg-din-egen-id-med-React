import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '@/styles/login.module.css';

const CreateAccountComponent = () => {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
  }

  const response = await fetch('https://localhost:7109/register', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
  });

  if (response.ok) {
    localStorage.setItem('token', data.accessToken);
    localStorage.setItem('email', email);
     
      router.push('/profile');
  } else {
     
    alert('account creation failed, Email already exists or Password is too short! use capital letters, numbers and special characters!');
  }
    
  };

  return (
    <div>
      <h1 className={styles.h1}>Create Account</h1>
      <div className={styles.createaccountcontainer}>  
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input className={styles.username} type="text" value={email} onChange={(e) => setemail(e.target.value)} />
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