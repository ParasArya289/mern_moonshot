import React from "react";
import "./SignUp.css";
const SignUp = ({ setAuthType }) => {
  return (
    <div className="singup auth_form">
      <h4>Create Your Account</h4>
      <form>
        <label htmlFor="name">
          Name
          <input type="text" name="name" placeholder="Enter" />
        </label>
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
        Have an Account?{" "}
        <button onClick={() => setAuthType("login")}>LOGIN</button>
      </p>
    </div>
  );
};

export default SignUp;
