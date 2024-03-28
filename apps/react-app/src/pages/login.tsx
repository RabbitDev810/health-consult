import React, { useState } from "react";
import signInImage from "../assets/image/main.png";
import signUpImage from "../assets/image/signup-form-pic.png";
import LoginForm from "@/components/login/login-form";
import SignupForm from "@/components/signup-form";
import Header from "@/components/home/header";
import { ColumnContainer, RowContainer } from "@/styles/common-styles";
import { isMobileHook } from "@/utils";

const Login = () => {
  const [signup, setSignup] = useState(false);
  const isMobile = isMobileHook();
  return (
    <ColumnContainer style={{ gap: "0px" }}>
      <Header />
      <RowContainer>
        {!isMobile && (
          <div
            style={{
              backgroundImage: `url(${signup ? signUpImage : signInImage})`,
              backgroundSize: "cover",
              width: "50%",
              height: "100%",
            }}
          ></div>
        )}

        <div
          style={{
            width: isMobile ? "100%" : "50%",
            margin: "5% 5%",
          }}
        >
          {!signup && <LoginForm setSignup={setSignup} />}
          {signup && <SignupForm setSignup={setSignup} />}
        </div>
      </RowContainer>
    </ColumnContainer>
  );
};

export default Login;
