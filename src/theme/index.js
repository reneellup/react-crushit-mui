import { createMuiTheme } from "@material-ui/core";
import shadows from "./shadows";
import typography from "./typography";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#50575c",
      main: "#282e33",
      dark: "#00030c",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7e85",
      main: "#ff4858",
      dark: "#c5002f",
      contrastText: "#000",
    },
    text: {
      primary: "#FF4858",
      secondary: "#7d8490",
    },
  },
  shadows,
  typography,
});

export default theme;
