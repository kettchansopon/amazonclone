import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from 'firebase';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = (event) => {
        event.preventDefault();
        auth
        .signInWithEmailAndPassword(email, password)
        .then((auth) => {
            history.push('/');
        }).catch((e) => alert(e.message));
    };
    const register = (event) => {
        event.preventDefault();
        auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth)=>{
            history.push('/');
        }).catch((e) => alert(e.message)); 
    };
    return (
        <div className="login">
            <Link to="/">
                <img 
                    className="login_logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
                    alt=""
                />
            </Link>
            <div className="login_container">
                <h1>Sign in</h1>
                <form>
                    <h5>Email</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="text"/>
                    <h5>Password</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="password"/>
                    <button onClick={login} className="login_signInButton">Sign In</button>
                </form>
                <p>
                    By sign-in you agree to Amazon's Conditions of Use & Sale. Please see our Pivacy Notice, our Coookies Notice and our Interest-Based Ads Notice.
                </p>
                <button onClick={register} className="login_registerButton">Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login;
