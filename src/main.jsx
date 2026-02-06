import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import Contacts from "./Contacts.jsx";
import NavBar from "./NavBar.jsx";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  palette: {
    primary: { main: "#FF7A59", contrastText: "#FFFFFF" }, // CTA orange
    secondary: { main: "#33475B" }, // slate
    neutral: { main: "#000000" },
    text: { primary: "#ff4900", secondary: "#000000"},
    background: { default: "#FFFFFF", paper: "#FFFFFF" },
    divider: "#E5E7EB",
  },
  components: {
    MuiButton: {
      defaultProps: {
        color: "inherit",
        variant: "text",
      },
    }}
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="contacts" element={<Contacts />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
