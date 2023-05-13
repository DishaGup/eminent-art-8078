import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { app } from "../firebase/firebase";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";

function SignUpForm() {
  const navigation = useNavigate()
  const [NewUserEmail, setNewuserEmail] = useState("");
  const [newUser, setnewName] = useState("");
  const [NewUserPassword, setNewuserPassword] = useState("");
  const auth = getAuth(app);
  const HandleNewUserSubmitData = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, NewUserEmail, NewUserPassword)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
      
        // console.log(user.accessToken);
        if (user.accessToken) {
          navigation("/sign-in")
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // console.log(errorMessage);
        // ..
      });
  };

  return (
    <>
      <nav>

        <div style={{ display: "flex", justifyContent: "space-around" }}>

          <Link style={{ display: "flex", alignItems: "center" }} className="navbar-brand" to={'/'}>
            Trendify
          </Link>

          <div >

            <ul style={{ display: "flex", justifyContent: "space-around", gap: "80px", padding: "15px" }}>
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


      <div style={{ backgroundColor: "rgb(72 82 212)", width: "100%", height: "100vh" }}>
        <div style={{
          width: "39 %",
          display: "flex",
          alignItems: "center",
          margin: "auto",
          justifyContent: "center"

        }}>
          <h3 style={{ marginTop: "162px", marginBottom: "-124px" }}>Create Your Account </h3>
        </div>
        <div style={{
          width: "39 %",
          display: "flex",
          alignItems: "center",
          margin: "auto",
          justifyContent: "center"

        }}>


          <form onSubmit={HandleNewUserSubmitData} style={{ marginTop: "190px", display: "flex", flexDirection: "column", gap: "27px", alignItems: "center" }}>
            <div class="form-group">
              <label for="exampleInputEmail1">Name</label>
              <input onChange={(e) => setnewName(e.target.value)} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name" />
              {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input onChange={(e) => setNewuserEmail(e.target.value)} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
              {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
            </div>

            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input onChange={(e) => setNewuserPassword(e.target.value)} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
            <div class="form-group">
              <a style={{ color: "white" }} href="/sign-up">If You Are Already Register <mark> Click Here</mark> </a>
              {/* <label class="form-check-label" for="exampleCheck1">Check me out</label> */}
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
      </div >
    </>
  );
}

export default SignUpForm;
