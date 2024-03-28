import { CircularProgress } from "@mui/material";

type LoadingProps = {
  height?: string;
  width?: string;
};
const Loading = (props: LoadingProps) => {
  const { height, width } = props;

  const loaderStyle = {
    display: "flex",
    justifyContent: "center",
    height: height ? height : "100%",
    width: width ? width : "100%",
  };
  return (
    <div style={loaderStyle}>
      <CircularProgress />
    </div>
  );
};

export default Loading;
