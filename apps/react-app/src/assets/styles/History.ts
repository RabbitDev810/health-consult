export const historyImgStyle = {
  height: "300px", // The second definition of .history img overrides the first one
  width: "100%",
  borderRadius: "25px 25px 0 0",
  maxWidth: "540px",
};

export const historyBoxStyle: React.CSSProperties = {
  height: "auto",
  backgroundColor: "#52c1b3",
  textAlign: "center" as React.CSSProperties["textAlign"],
  border: "none",
  marginTop: "90px", // This will be overridden by the margin shorthand below
  borderRadius: "25px",
  margin: "80px 30px 0 30px",
  padding: "0 0 40px 0",
  boxShadow: "2px 4px 5px rgba(128, 128, 128, 0.49)",
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  minWidth: "520px",
};

export const historyBoxH1Style = {
  fontSize: "28px",
  color: "white",
  fontWeight: "500",
};
