import React from 'react';
import './Styles/Loginsignup.css';
import { Link } from 'react-router-dom';

const LoginSignup = () => {
    return (
        <div className='loginsignup'>
            <div className="loginsignup-container">
                <h1>Sign Up</h1>
                <div className="loginsignup-fields">
                    <input type="text" placeholder='Your Name' />
                    <input type="email" placeholder='Email Address' />
                    <input type="password" placeholder='Password' />
                </div>
                <button>Signup</button>
                <p className='loginsignup-login'>Already have an account? <Link to='/login'>Login Here</Link></p>
                <div className="loginsignup-agree">
                    <input type="checkbox" name='' id='' />
                    <p>By Continuing, I agree to the terms of use & privacy policy.</p>
                </div>
            </div>
        </div>
    )
}

export default LoginSignup;
