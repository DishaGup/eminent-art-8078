import React from 'react'
import "./Auth.css";
import SignInForm from './SignInPage';
import SignUpForm from './SignUpPage';
import { useState } from 'react';
import Navmain from '../Components/HomePage/Navmain';
import { Link } from 'react-router-dom';
const Auth = () => {


    return (<>


        <div>
            <nav>

                <div style={{ display: "flex", justifyContent: "space-around", padding: "15px" }}>

                    <Link className="navbar-brand" to={'/sign-in'}>
                        Trendify
                    </Link>

                    <div >
                        <ul style={{ display: "flex", justifyContent: "space-around", gap: "80px" }}>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/sign-in'}>
                                    Login
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/sign-up'}>
                                    Sign up
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </>
    );
}

export default Auth
