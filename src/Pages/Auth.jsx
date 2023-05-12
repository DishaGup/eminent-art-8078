import React from 'react'
import "./Auth.css";
import SignInForm from './SignInPage';
import SignUpForm from './SignUpPage';
import { useState } from 'react';
import Navmain from '../Components/HomePage/Navmain';
const Auth = () => {
    const [type, setType] = useState("signIn");
    const handleOnClick = text => {
        if (text !== type) {
            setType(text);
            return;
        }
    };
    const containerClass =
        "container " + (type === "signUp" ? "right-panel-active" : "");
    return (
        <>
            <Navmain></Navmain>
            <div className="App">

                <h2 className='authhstag'>Sign in/up Form</h2>
                <div className={containerClass} id="authcontainer">
                    <SignUpForm />
                    <SignInForm />
                    <div className="overlay-authcontainer">
                        <div className="overlay">
                            <div className="overlay-panel overlay-left">
                                <h1  className="authhtag">Welcome Back!</h1>
                                <p className='Authptag'>
                                    To keep connected with us please login with your personal info
                                </p>
                                <button
                                    className="ghost authform"
                                    id="signIn"
                                    onClick={() => handleOnClick("signIn")}
                                >
                                    Sign In
                                </button>
                            </div>
                            <div className="overlay-panel overlay-right">
                                <h1  className="authhtag">Hello, Friend!</h1>
                                <p>Enter your personal details and start journey with us</p>
                                <button
                             
                                    className="ghost authform"
                                    id="signUp"
                                    onClick={() => handleOnClick("signUp")}
                                >
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Auth
