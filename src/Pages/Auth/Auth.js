import { useEffect, useState } from "react";
import SignUp from "../../Components/UI/SignUp/SignUp";
import "./Auth.css";
import Login from "../../Components/UI/Login/Login";
import Otp from "../../Components/UI/OTP/Otp";
import { useEcommerceData } from "../../Context/EcommmerceContext";
import { useNavigate } from "react-router-dom";

export const Auth = () => {
  const [authType, setAuthType] = useState("signup");
  const [checkOtp, setCheckOtp] = useState(false);
  const [generatedOtp, setGeneratedOtp] = useState(0);
  const [newUser, setNewUser] = useState({});

  const { createUser, user, logout } = useEcommerceData();
  const navigate = useNavigate();

  const createOTP = (digit) => {
    return Math.floor(10000000 + Math.random() * (digit * 10000000));
  };
  useEffect(() => {
    // if (user.name) {
    //   navigate("/");
    // }
  }, []);
  const onOtpSubmit = (userOtp) => {
    if (userOtp == generatedOtp) {
      createUser(newUser);
      navigate("/");
    } else {
      alert("Wrong OTP");
    }
  };
  return (
    <div className="auth">
      {!user?.name ? (
        <>
          {authType === "login" ? (
            <Login setAuthType={setAuthType} />
          ) : checkOtp ? (
            <Otp digit={8} onOtpSubmit={onOtpSubmit} />
          ) : (
            <SignUp
              setAuthType={setAuthType}
              setCheckOtp={setCheckOtp}
              createOTP={createOTP}
              setGeneratedOtp={setGeneratedOtp}
              setNewUser={setNewUser}
            />
          )}
          {checkOtp && generatedOtp}
        </>
      ) : (
        <>
          <h4 className="user__desc">Hi {user.name} you are logged in.</h4>
          <button className="user__logout" onClick={logout}>
            Logout
          </button>
        </>
      )}
    </div>
  );
};
