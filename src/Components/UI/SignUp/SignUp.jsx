import React from "react";

const SignUp = () => {
  return (
    <div className="singup auth_form">
      <h4>Create Your Account</h4>
      <form>
        <label htmlFor="name">
          Name
          <input type="text" name="name" />
        </label>
        <label htmlFor="email">
          Email
          <input type="email" name="email" />
        </label>
        <label htmlFor="password">
          password
          <input type="text" name="password" />
        </label>
      </form>
    </div>
  );
};

export default SignUp;
