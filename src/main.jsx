import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "./style/color.css";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { ConfigProvider } from "antd";
import { BrowserRouter } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "#F81B3E",
    },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ConfigProvider
      theme={{ token: { colorPrimary:"#F81B3E" } }}
    >
    <ThemeProvider
     theme={theme}>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </ThemeProvider>
    </ConfigProvider>
  </StrictMode>
);
