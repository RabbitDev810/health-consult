import { Avatar, useTheme } from "@mui/material";
type PictureContainerProps = {
  avatar?: string;
  name: string;
};
const PictureContainer = (props: PictureContainerProps) => {
  const { avatar, name } = props;
  const theme = useTheme();
  const firstLetter = name ? name[0] : "";

  const messageCardStyle: React.CSSProperties = {
    // backgroundColor: theme.palette.primary.main,
    backgroundColor: "white",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    padding: "2px",
    borderRadius: "10px",
  };

  const dimensions: React.CSSProperties = {
    minHeight: "100px",
    height: "auto",
    minWidth: "100px",
    width: "auto",
    // borderRadius: "50%",
  };

  return (
    <div style={{ ...messageCardStyle, ...dimensions }}>
      <img src={avatar} style={dimensions}></img>
    </div>
  );
};

export default PictureContainer;
