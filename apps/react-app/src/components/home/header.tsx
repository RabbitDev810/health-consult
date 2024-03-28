import { isMobileHook } from "@/utils";
import { IconButton, useTheme } from "@mui/material";
import { Logout } from "@mui/icons-material";
import { Auth } from "aws-amplify";
import { useNavigate } from "react-router-dom";

type HeaderProps = {
  toHome?: boolean;
};
const Header = (props: HeaderProps) => {
  const { toHome } = props;
  const isMobile = isMobileHook();
  const theme = useTheme();
  const navigate = useNavigate();
  const currentPath = window.location.pathname;
  return (
    <div
      style={{
        justifyContent: "center",
        backgroundColor: theme.palette.primary.main,
        padding: "10px 30px 10px 30px",
        display: "flex",
        alignItems: "center",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          paddingRight: !isMobile && "40px",
        }}
      >
        <h1
          style={{
            color: "white",
            fontSize: "40px",
            fontWeight: 600,
            alignSelf: "center",
            minWidth: "fit-content",
            marginRight: isMobile ? "0px" : "20px",
            cursor: toHome && "pointer",
          }}
          onClick={() => toHome && navigate("/home")}
        >
          Health Inc
        </h1>
        {!isMobile && (
          <div
            style={{
              backgroundColor: "white",
              height: "80px",
              borderRight: "0.5px solid white",
            }}
          ></div>
        )}
        {!isMobile && (
          <p
            style={{
              color: "white",
              fontSize: "23px",
              fontWeight: 500,
              paddingLeft: "20px",
            }}
          >
            Streamlining healthcare documentation for enhanced efficiency and
            precision.
          </p>
        )}
      </div>
      {(currentPath.includes("/home") || currentPath.includes("/visit")) && (
        <IconButton
          style={{ position: "absolute", right: "20px" }}
          onClick={async () => {
            await Auth.signOut();
            window.location.reload();
          }}
        >
          <Logout style={{ color: "white", height: "30px", width: "30px" }} />
        </IconButton>
      )}
    </div>
  );
};
export default Header;
