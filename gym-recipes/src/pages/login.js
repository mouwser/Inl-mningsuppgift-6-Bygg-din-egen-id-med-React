import React, { useState } from 'react';
import Navbar from '@/components/navbar';
import styles from '@/styles/login.module.css';
import LoginComponent from '@/components/logincomponent';
import CreateAccountComponent from '@/components/createaccountcomponent';

const LoginPage = () => {
    const [showLogin, setShowLogin] = useState(true);

    return (
        <div>
            <Navbar />
            <div className={styles.logincontainer}>
                <div className={styles.centerContent}>
                    {showLogin ? <LoginComponent /> : <CreateAccountComponent />}
                <div className={styles.buttonContainer}>    
                    <button className={styles.button} onClick={() => setShowLogin(true)}>Login</button>
                    <button className={styles.button} onClick={() => setShowLogin(false)}>Create Account</button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;