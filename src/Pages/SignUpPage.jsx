import React from "react";
function SignUpForm() {
  const [state, setState] = React.useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = evt => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  };

  const handleOnSubmit = evt => {
    evt.preventDefault();

    const { name, email, password } = state;
    alert(
      `You are sign up with name: ${name} email: ${email} and password: ${password}`
    );

    for (const key in state) {
      setState({
        ...state,
        [key]: ""
      });
    }
  };

  return (
    <div className="form-authcontainer sign-up-authcontainer">
      <form onSubmit={handleOnSubmit} className="authform">
        <h1  className="authhtag">Create Account</h1>
        <div className="social-authcontainer">
          <a href="#" className="social">
            <i className="fab fa-facebook-f authatag" />
          </a>
          <a href="#" className="social authatag">
            <i className="fab fa-google-plus-g" />
          </a> 
          <a href="#" className="social authatag">
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
        <span className="authspantag">or use your email for registration</span>
        <input
        className="Authinput"
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input className="Authinput"
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input className="Authinput"
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <button className="AuthButton">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpForm;
