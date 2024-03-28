import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useLogin from "@/hooks/useLogin";
import { Auth } from "aws-amplify";
import CustomButton from "../custom-button";
import { TextField, useTheme } from "@mui/material";
import { ColumnContainer } from "@/styles/common-styles";
import { isMobileHook } from "@/utils";
import Loading from "../general/loading";

type LoginFormProps = {
  setSignup: React.Dispatch<React.SetStateAction<boolean>>;
};
const LoginForm = (props: LoginFormProps) => {
  const isLoggedIn = useLogin();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [disabled, setDisabled] = useState(false);

  const theme = useTheme();
  const isMobile = isMobileHook();

  useEffect(() => {
    if (isLoggedIn) navigate("/home/");
  }, [isLoggedIn]);

  const resetErrorMessage = () => {
    if (errorMessage) setErrorMessage("");
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    resetErrorMessage();
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    resetErrorMessage();
  };

  const handleSubmit = async () => {
    setDisabled(true);

    if (!email || !password) return;

    try {
      const user = await Auth.signIn({
        username: email,
        password,
      });
      // console.log(user);
      localStorage.setItem("email", email);
      sessionStorage.setItem("token", user?.signInUserSession?.accessToken?.jwtToken);
      navigate("/home");
    } catch (error) {
      console.log(error);
      setErrorMessage(error.message);
    } finally {
      setDisabled(false);
    }
  };

  return (
    <ColumnContainer
      style={{
        flex: 1,
        maxWidth: "24rem",
        gap: "25px",
        marginBottom: isMobile ? "50%" : "0px",
      }}
    >
      <h1 style={{ marginBottom: "10px", alignSelf: "flex-start" }}>
        {"Login"}
      </h1>
      <TextField
        variant="outlined"
        label="Username"
        placeholder="Enter your Username"
        value={email}
        onChange={handleEmailChange}
        style={{ width: "100%" }}
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        variant="outlined"
        label="Password"
        type="password"
        placeholder="Enter your Password"
        value={password}
        onChange={handlePasswordChange}
        style={{ width: "100%" }}
        InputLabelProps={{ shrink: true }}
      />
      <ColumnContainer style={{ alignItems: "center", maxWidth: "24rem" }}>
        {errorMessage && (
          <span style={{ color: "red", alignSelf: "flex-start" }}>
            {errorMessage}
          </span>
        )}
        <div style={{ width: "100%" }}>
          {!disabled && (
            <CustomButton
              label="Submit"
              background={theme.palette.primary.main}
              textColor="white"
              onClick={handleSubmit}
              width="100%"
            />
          )}
          {disabled && <Loading />}
        </div>
        <span>
          Don't have an account?{" "}
          <a
            style={{
              color: theme.palette.primary.main,
              textDecoration: "underline",
              cursor: "pointer",
            }}
            onClick={() => props.setSignup(true)}
          >
            Sign up
          </a>
        </span>
        <div style={{ cursor: "pointer" }}>Forgot Password?</div>
      </ColumnContainer>
    </ColumnContainer>
  );
};

export default LoginForm;
