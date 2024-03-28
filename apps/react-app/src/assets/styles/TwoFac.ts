export const authTextCenterStyle = {
  textAlign: "center" as React.CSSProperties["textAlign"],
  // Note: `!important` cannot be used with inline styles. If needed, it should be handled with higher specificity in external CSS.
};

export const authFormH1Style = {
  fontWeight: 500,
  fontSize: "18px",
  margin: 0,
};

export const authFormPStyle = {
  fontSize: "13px",
  color: "#9C9C9C",
  margin: "20px 0",
};

export const inputContainer: React.CSSProperties = {
  boxSizing: "border-box",
  display: "inline-block",
  position: "relative",
  width: "100%",
  maxWidth: "24rem",
  height: "4.5rem",
};

export const buttonContainer: React.CSSProperties = {
  width: "100%",
  maxWidth: "24rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};
