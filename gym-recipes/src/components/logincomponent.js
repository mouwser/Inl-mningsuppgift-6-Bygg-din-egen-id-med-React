import React, { useState } from 'react';
import styles from '@/styles/login.module.css';
import { useRouter } from 'next/router';

const LoginComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

    const handleSubmit = async (event) => {
      event.preventDefault();
  
      const response = await fetch('https://localhost:7109/login', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            
              email: email,
              password: password,
          }),
      });
  
      if (response.ok) {
          const data = await response.json();
          
          // handle successful login
          localStorage.setItem('token', data.accessToken);
          localStorage.setItem('email', email);
          
          router.push('/profile');
      } else {
          // handle error
          alert('Login failed, Email or Password is incorrect!');
          return;
      }
  };

  return (
    <div>
      <h1 className={styles.h1}>Login</h1>
      <div className={styles.loginaccountcontainer}>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input className={styles.email} type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
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