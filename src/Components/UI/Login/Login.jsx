import React from "react";
// import "./SignUp.css";
const Login = () => {
  return (
    <div className="login auth_form">
      <h4>Login</h4>
      <h5>Welcome back to ECOMMERCE</h5>
      <h6>The next gen business marketplace</h6>
      <form>
        <label htmlFor="email">
          Email
          <input type="email" name="email" placeholder="Enter" />
        </label>
        <label htmlFor="password">
          Password
          <input type="text" name="password" placeholder="Enter" />
        </label>
        <button type="submit">CREATE ACCOUNT</button>
      </form>
      <hr />
      <p>
        Don't have an Account? <button>SIGN UP</button>
      </p>
    </div>
  );
};

export default Login;
