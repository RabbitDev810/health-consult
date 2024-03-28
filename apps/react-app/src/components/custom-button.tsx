import { Link } from "react-router-dom";

type CustomButtonProps = {
  to?: string;
  label: string;
  onClick?: () => void;
  background?: string;
  textColor?: string;
  width?: string;
};

const buttonStyle = {
  color: "var(--color-black)",
  padding: "0.35rem 0.75rem",
  borderRadius: "0.25rem",
  background: "white",
  border: "1px solid var(--color-default)",
  fontSize: "1.4rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "0.5rem",
  cursor: "pointer",
};

const CustomButton = (props: CustomButtonProps) => {
  return (
    <>
      <Link to={props.to} style={{ textDecoration: "none" }}>
        <button
          style={{
            ...buttonStyle,
            background: props.background,
            color: props.textColor,
            width: props.width ? props.width : "100%",
          }}
          onClick={() => {
            props.onClick();
          }}
        >
          {props.label}
        </button>
      </Link>
    </>
  );
};

export default CustomButton;
