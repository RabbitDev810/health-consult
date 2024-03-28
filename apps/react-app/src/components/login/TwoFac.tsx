import {
  authTextCenterStyle,
  buttonContainer,
  inputContainer,
} from "@/assets/styles/TwoFac";
import Header from "../home/header";
import { useNavigate } from "react-router-dom";
import CustomButton from "../custom-button";
import { useTheme } from "@mui/material";
import { Auth } from "aws-amplify";
import { useState } from "react";
import FormField from "../info/form-field";
import { isMobileHook } from "@/utils";
import { ColumnContainer } from "@/styles/common-styles";
import { useUserStore } from "@/store/user";

const TwoFac = () => {
  const theme = useTheme();
  const isMobile = isMobileHook();
  const navigate = useNavigate();

  const [code, setCode] = useState("");

  const { isSigningIn, signingInUser } = useUserStore();
  const user = signingInUser;
  const username = localStorage.getItem("email");

  const authFormStyle = {
    height: "auto",
    width: isMobile ? "80%" : "480px",
    border: "2px solid rgba(128, 128, 128, 0.158)",
    margin: "auto",
    marginTop: "180px",
    borderRadius: "20px",
    padding: "40px 20px",
    backgroundColor: "rgba(244, 247, 250, 0.282)",
  };

  const handleSubmit = async () => {
    if (!code || !username) return;
    console.log({ code, username });
    try {
      const res = isSigningIn
        ? await Auth.confirmSignIn(user, code, "SMS_MFA")
        : await Auth.confirmSignUp(username, code);
      console.log(res);
      // navigate("/home");
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <>
      <section>
        <div>
          <Header />
        </div>
        <div style={authTextCenterStyle}>
          <center style={authFormStyle}>
            <h1>Two Factor Authentication</h1>
            <p>
              Enter the verification code <br />{" "}
            </p>
            <ColumnContainer style={{ width: "80%" }}>
              <div style={{ marginTop: "10px", marginBottom: "10px" }}>
                <FormField
                  label="Code"
                  placeholder="6-digit Code"
                  width="100%"
                  onChange={(value) => setCode(value)}
                />
              </div>
              <div style={buttonContainer}>
                <CustomButton
                  label="Submit"
                  to="/home"
                  background={theme.palette.primary.main}
                  textColor="white"
                  onClick={handleSubmit}
                  width="100%"
                />
              </div>
            </ColumnContainer>
          </center>
        </div>
      </section>
    </>
  );
};
export default TwoFac;
