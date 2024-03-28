import { useState } from "react";
import { TextField, useTheme } from "@mui/material";

import { getErrorMessage } from "@/firebase/handle-error";
import { Auth } from "aws-amplify";

import { useNavigate } from "react-router-dom";
import { isMobileHook } from "@/utils";
import { ColumnContainer } from "@/styles/common-styles";
import CustomButton from "./custom-button";
import Loading from "./general/loading";

type SignupFormProps = {
  setSignup: React.Dispatch<React.SetStateAction<boolean>>;
};

const SignupForm = (props: SignupFormProps) => {
  const isMobile = isMobileHook();
  const theme = useTheme();
  const navigate = useNavigate();

  const [disabled, setDisabled] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone_number, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async () => {
    if (password != confirmPassword) return;

    setDisabled(true);

    try {
      // Initiate the signup
      const res = await Auth.signUp({
        username: email,
        password,
        attributes: { email, name, phone_number },
      });
      localStorage.setItem("email", email);
      navigate("/two-factor");
    } catch (error) {
      const msg = (error as { message: string }).message;
      const errorText = getErrorMessage(msg);
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
        {"Signup"}
      </h1>
      <TextField
        variant="outlined"
        label="Name"
        placeholder="Enter your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ width: "100%" }}
      />
      <TextField
        variant="outlined"
        label="Email"
        placeholder="Enter your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ width: "100%" }}
      />
      <TextField
        variant="outlined"
        label="Password"
        type="password"
        placeholder="Enter your Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ width: "100%" }}
      />
      <TextField
        variant="outlined"
        label="Confirm Password"
        type="password"
        placeholder="Enter your Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        style={{ width: "100%" }}
      />
      <ColumnContainer style={{ alignItems: "center", maxWidth: "24rem" }}>
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
          Already have an account?{" "}
          <a
            style={{
              color: theme.palette.primary.main,
              textDecoration: "underline",
              cursor: "pointer",
            }}
            onClick={() => props.setSignup(false)}
          >
            Login
          </a>
        </span>
      </ColumnContainer>
    </ColumnContainer>
  );
};

export default SignupForm;
