import { ListItemIcon, useTheme } from "@mui/material";
import React from "react";
import { Auth } from "aws-amplify";
import { useNavigate } from "react-router-dom";
import { Logout } from "@mui/icons-material";
import { isMobileHook } from "@/utils";

const sidebarStyle: React.CSSProperties = {
  backgroundColor: "white",
  fontFamily: "Montserrat",
  fontWeight: 500,
  fontSize: "18px",
  flex: 1,
  flexDirection: "column",
  display: "flex",
  justifyContent: "space-between",
  boxShadow: "10px 0 5px -5px rgba(0,0,0,0.03)",
  alignItems: "center",
};

const textsideStyle = {
  fontSize: "large",
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  marginBottom: "20px",
  gap: "10px",
};

const Sidebar = ({ items, onClick, activeItem, height }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = isMobileHook();
  return (
    <div
      style={{
        ...sidebarStyle,
        width: "100%",
        maxWidth: isMobile ? "20px" : "265px",
        height: "100%",
        minHeight: "100%",
        padding: isMobile && "10px",
      }}
    >
      <div
        style={{
          paddingTop: "20px",
        }}
      >
        {items.map((item) => (
          <div
            key={item.key}
            onClick={() => onClick(item.key)}
            style={{
              ...textsideStyle,

              // You can uncomment the borderRight line if you need a border indication for active item
              // borderRight: item.key === activeItem ? "3px solid black" : "none",
            }}
          >
            {item.key === activeItem ? item.active_image : item.inactive_image}
            {!isMobile && (
              <p
                style={{
                  color:
                    item.key === activeItem
                      ? theme.palette.primary.main
                      : "#004C4C",
                }}
              >
                {item.label}
              </p>
            )}
          </div>
        ))}
      </div>
      <div style={{ width: "100%" }}>
        {isMobile && (
          <div
            style={{
              ...textsideStyle,
              marginLeft: !isMobile && "-20px",
              marginBottom: isMobile ? "10px" : "0px",
              justifyContent: "center",
            }}
            onClick={async () => {
              await Auth.signOut();
              window.location.reload();
            }}
          >
            <ListItemIcon
              sx={{
                color: theme.palette.primary.main,
              }}
              style={{ minWidth: "0px" }}
            >
              <Logout />
            </ListItemIcon>
            {!isMobile && <p>{"Logout"}</p>}
          </div>
        )}

        {!isMobile && (
          <p
            style={{
              width: "100%",
              backgroundColor: theme.palette.primary.main,
              textAlign: "center",
              padding: "10px 0px",
              color: "white",
              margin: "0px",
              cursor: "pointer",
            }}
            onClick={() => navigate("/home")}
          >
            Health Inc
          </p>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
