import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {supabase} from '../supabase';
import './auth.css';

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const handleSignin = async (e) => {
        e.preventDefault();

        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        }); 
            
        if (error) {
            setMessage(`Error: ${error.message}`);
        } else {
            setMessage('Signin successful! Welcome back.');
        }
    }
    return (
        <div className="signin-container">
            <form className="signin-form" onSubmit={handleSignin} >
                <h1>Sign In</h1>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Sign In</button>
                {message && <p className="message">{message}</p>}
                <p>Don't have an account?{" "}
                    <Link to="/signup" style={{ color: "#007bff" }}>Sign Up</Link>
                </p>
            </form>
        </div>
    );
}
export default SignIn;