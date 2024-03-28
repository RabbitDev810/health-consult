import { createTheme } from "@mui/material/styles";

const THEME = createTheme({
  typography: {
    fontFamily: `"Roboto", sans-serif`,
  },
  palette: {
    primary: {
      main: "#52c1b3",
      light: "#eff6ff",
      dark: "#1e3a8a",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#0284c7",
      light: "#6ee7f9",
      dark: "#0369a1",
      contrastText: "#000000",
    },
    background: {
      default: "#eff6ff",
      paper: "#121212",
    },
    error: {
      main: "#f44336",
      light: "#e57373",
      dark: "#d32f2f",
    },
    warning: {
      main: "#ff9800",
      light: "#ffb74d",
      dark: "#f57c00",
    },
    info: {
      main: "#2196f3",
      light: "#64b5f6",
      dark: "#1976d2",
    },
    success: {
      main: "#4caf50",
      light: "#81c784",
      dark: "#388e3c",
    },
    grey: {
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#eeeeee",
      300: "#e0e0e0",
      400: "#bdbdbd",
      500: "#9e9e9e",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
    },
  },
});

export default THEME;
