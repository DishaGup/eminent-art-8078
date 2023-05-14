import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { app } from "../firebase/firebase";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";


function SignInForm() {
  const navigate = useNavigate();
  const auth = getAuth(app);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
       
        localStorage.setItem("Isauth", user.accessToken);
        if (user.accessToken) {
          navigate("/");
        }
        // ...
      })
      .catch((error) => {
        window.alert("Plz Enter Valid Data");
      });
  };

useEffect(()=>{




},[])

const loginPost=()=>{
  axios
  .post(`http://localhost:8080/trendify/users/add`,{
    headers: {
      Authorization: `${token}`,
    },
  })
  .then((res) => {
    console.log("res:", res.token);
    if (res.data.msg === "Please Login First!!") {
      toast({
        title: "Login First!",
        description:
          "Please do login to your account or signup to start a new journey with us!",
        status: "error",
        duration: 4000,
        isClosable: true,
        position: "top",
      });
    } else {
      toast({
        title: "Product added to cart!!",
        description: "The product is added to your cart",
        status: "success",
        duration: 4000,
        isClosable: true,
        position: "top",
      });
    }
  })
  .catch((err) => {
    toast({
      title: "Login First!",
      description:
        "Please do login to your account or signup to start a new journey with us!",
      status: "error",
      duration: 1000,
      isClosable: true,
      position: "top",
    });
  });
}


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
          {/* margin-top: 162px;
    margin-bottom: -124px; */}
          <h3 style={{ marginTop: "162px", marginBottom: "-124px" }}>login Here </h3>
        </div>
        <div style={{
          width: "39 %",
          display: "flex",
          alignItems: "center",
          margin: "auto",
          justifyContent: "center"

        }}>
          <form onSubmit={handlesubmit} style={{ marginTop: "190px", display: "flex", flexDirection: "column", gap: "27px", alignItems: "center" }}>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input onChange={(e)=>setemail(e.target.value)} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
              {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
            </div>

            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input  onChange={(e)=>setpassword(e.target.value)} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>

            <div class="form-group">
              <a style={{ color: "white" }} href="/sign-up"><strong> Register Now As A New User. </strong> </a>
              {/* <label class="form-check-label" for="exampleCheck1">Check me out</label> */}
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
      </div >
    </>
  );
}

export default SignInForm;
