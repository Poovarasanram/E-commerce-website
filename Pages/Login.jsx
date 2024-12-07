import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './Styles/Login.css';

const Login = () => {
    // State variables to store user input
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Implement your login logic here
        console.log('clicked');
    };
    return (
        <div className='login'>
            <div className="login-container">
                <h1>Login</h1>
                <form className="login-form" onSubmit={handleLogin}>

                    <input
                        type="email"
                        id="email"
                        placeholder='Email Address'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />


                    <input
                        type="password"
                        id="password"
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button onClick={handleLogin}>Login</button>
                </form>
                <p className='login-signup'>Don't have an account? <Link to="/signup">Sign Up Here</Link></p>
            </div>
        </div>
    );
}

export default Login;
