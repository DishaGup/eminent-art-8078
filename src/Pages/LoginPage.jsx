
import React, { useState } from "react";
import "./LoginPage.css";
import { app } from "../firebase/firebase";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
const LoginPage = () => {

  // Login Firebase Config

  const auth = getAuth(app);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  // Done Login Configuration


  // Config with New User's

  // const auth = getAuth();
  const [NewUserEmail, setNewuserEmail] = useState("")
  const [NewUserPassword, setNewuserPassword] = useState("")

  const HandleNewUserSubmitData = (e) => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, NewUserEmail, NewUserPassword)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
        // ..
      });
  }


  // Done Config with new User's


  const [mode, setMode] = useState("sign-in");

  const handleSignUpClick = () => {
    setMode("sign-up");
  };

  const handleSignInClick = () => {
    setMode("sign-in");
  };

  return <>

    <div className={`container ${mode === "sign-up" ? "sign-up-mode" : ""}`}>
      <div class="forms-container">
        <div class="signin-signup">
          <form action="" class="sign-in-form" onSubmit={handlesubmit}>
            <h2 class="title">Sign in</h2>
            <div class="input-field">
              <i class="fas fa-user"></i>
              <input onChange={(e) => setemail(e.target.value)} type="text" placeholder="Username" required />
            </div>
            <div class="input-field">
              <i class="fas fa-lock"></i>
              <input onChange={(e) => setpassword(e.target.value)} type="password" placeholder="Password" required />
            </div>
            <input type="submit" value="Login" class="btn solid" />

            <p class="social-text">Or Sign in with social platforms</p>
            <div class="social-media">
              <a href="#" class="social-icon">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-google"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>

          <form action="" class="sign-up-form" onSubmit={HandleNewUserSubmitData}>
            <h2 class="title">Sign up</h2>

            <div class="input-field">
              <i class="fas fa-envelope"></i>
              <input type="text" placeholder="Email" onChange={(e) => setNewuserEmail(e.target.value)} required />
            </div>
            <div class="input-field">
              <i class="fas fa-lock"></i>
              <input type="password" placeholder="Password" onChange={(e) => setNewuserPassword(e.target.value)} required />
            </div>
            <input type="submit" value="Sign up" class="btn solid" />

            <p class="social-text">Or Sign up with social platforms</p>
            <div class="social-media">
              <a href="#" class="social-icon">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-google"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
        </div>
      </div>
      <div class="panels-container">
        <div class="panel left-panel">
          <div class="content">
            <h3>Sign up</h3>
            <p>Welcome to our sign-up process! We're excited to have you join our community. </p>
            <button className="btn transparent"
              onClick={handleSignUpClick}
              class="btn transparent" id="sign-up-btn">Sign up</button>
          </div>

          <img src="img/log.svg" class="image" alt="" />
        </div>

        <div class="panel right-panel">
          <div class="content">
            <h3>Sign In</h3>
            <p>Welcome back! To access your account,</p>
            <button onClick={handleSignInClick} class="btn transparent" id="sign-in-btn">Sign in</button>
          </div>

          <img src="img/register.svg" class="image" alt="" />
        </div>
      </div>

    </div>

  </>
}

export default LoginPage