// @ts-ignore
import { useTheme } from "@mui/material";
import { MicOutlined } from "@mui/icons-material";
import styled, { keyframes } from "styled-components";

const bounce = keyframes`
  0%, 100% {
    transform: scaleY(1);
  }
  50% {
    transform: scaleY(2);
  }
`;
type BarProps = {
  delay: string;
};

export const ListeningIndicator = () => {
  const theme = useTheme();

  const Bar = styled.div<BarProps>`
    background-color: ${theme.palette.primary.main};
    width: 5px;
    height: 20px;
    margin: 0 2px;
    display: inline-block;
    animation: ${bounce} 0.6s infinite ease-in-out;
    animation-delay: ${(props) => props.delay};
  `;

  return (
    <div
      style={{
        marginLeft: "10px",
        background: theme.palette.grey[100],
        padding: "10px",
        borderRadius: "15px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <MicOutlined style={{ color: theme.palette.primary.main }} />
      <div style={{ display: "flex", marginLeft: "5px" }}>
        <Bar delay="0s" color={theme.palette.primary.main} />
        <Bar delay="0.2s" />
        <Bar delay="0.4s" />
        <Bar delay="0.6s" />
        <Bar delay="0.8s" />
      </div>
    </div>
  );
};
