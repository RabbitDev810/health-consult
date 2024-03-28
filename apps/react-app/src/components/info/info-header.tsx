import { useNavigate } from "react-router-dom";
import header from "../../assets/image/header.png";
import { IconButton, useTheme } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import { ColumnContainer, RowContainer } from "@/styles/common-styles";
import { isMobileHook } from "@/utils";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import { Auth } from "aws-amplify";
import { Logout } from "@mui/icons-material";

type InfoHeaderProps = {
  title: string;
  showChat?: boolean;
  callback?: (showChat: boolean) => void;
  showChatIcon?: boolean;
};

const headerStyle: React.CSSProperties = {
  width: "100%",
  height: "70px",
  display: "flex",
  backgroundColor: "hsl(172, 47%, 54%)",
  alignItems: "center",
};
const logoContainerStyle: React.CSSProperties = {
  maxWidth: "265px",
  display: "flex",
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
};

const InfoHeader = (props: InfoHeaderProps) => {
  const { title, showChat, callback, showChatIcon } = props;
  const isMobile = isMobileHook();
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <RowContainer style={{ height: "auto" }}>
      <ColumnContainer>
        <div style={headerStyle}>
          <div
            style={logoContainerStyle}
            onClick={() => navigate("/home")}
          >
            <img
              src={header}
              style={{
                width: "45px",
                height: "42px",
                margin: "15px auto",
              }}
              alt="information"
            />
          </div>
          <div style={{ flexGrow: 1, display: "flex" }}>
            <p
              style={{
                marginLeft: "5%",
                fontSize: "20px",
                color: "white",
                fontWeight: "600",
                fontFamily: "Montserrat",
                flex: 2,
              }}
            >
              {title}
            </p>
            {!isMobile && (
              <IconButton
                style={{ marginRight: "1rem" }}
                onClick={async () => {
                  await Auth.signOut();
                  window.location.reload();
                }}
              >
                <Logout
                  style={{ color: "white", height: "30px", width: "30px" }}
                />
              </IconButton>
            )}
          </div>
          {isMobile && showChatIcon && (
            <IconButton
              onClick={() => callback && callback(!showChat)} // Toggle showChat state on click
              style={{
                marginRight: "20px", // Adjust as necessary
                cursor: "pointer",
              }}
            >
              {showChat ? (
                <ChatIcon
                  style={{
                    color: "white",
                  }}
                />
              ) : (
                <ChatOutlinedIcon style={{ color: "white" }} />
              )}
            </IconButton>
          )}
        </div>
      </ColumnContainer>
    </RowContainer>
  );
};

export default InfoHeader;
