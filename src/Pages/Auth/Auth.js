import { useState } from "react";
import SignUp from "../../Components/UI/SignUp/SignUp";
import "./Auth.css";
import Login from "../../Components/UI/Login/Login";

export const Auth = () => {
  const [authType, setAuthType] = useState("signup");

  return (
    <div className="Auth">
      {authType === "login" ? (
        <Login setAuthType={setAuthType} />
      ) : (
        <SignUp setAuthType={setAuthType} />
      )}
    </div>
  );
};
