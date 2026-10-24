import React from "react";
import { createRoot } from "react-dom/client";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import App from "./App";
import "./styles.css";

const theme = createTheme({
  palette: { mode: "dark", primary: { main: "#3494d8" }, background: { default: "#0a0a0a", paper: "#111111" } },
  typography: { fontFamily: "'Inter', 'Segoe UI', sans-serif" },
  shape: { borderRadius: 8 },
});

createRoot(document.getElementById("root")).render(
  <React.StrictMode><ThemeProvider theme={theme}><CssBaseline /><App /></ThemeProvider></React.StrictMode>
);
