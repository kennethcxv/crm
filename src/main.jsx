import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./app/App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Pricing from "./pages/Pricing.jsx";
import Products from "./pages/Products.jsx";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Solutions from "./pages/Solutions.jsx";
import Resources from "./pages/Resources.jsx";
import FreeCrm from "./pages/FreeCRM.jsx";
import Login from "./pages/Login.jsx";
import About from "./pages/About.jsx";
import ContactList from "./pages/ContactList.jsx";
import MainLayout from "./Layouts/MainLayout.jsx";

const theme = createTheme({
  palette: {
    primary: { main: "#ff4900", contrastText: "#FFFFFF" }, // CTA orange
    secondary: { main: "#33475B" }, // slate
    neutral: { main: "#000000" },
    text: { primary: "#ff4900", secondary: "#000000" },
    background: { default: "#FFFFFF", paper: "#FFFFFF" },
    divider: "#E5E7EB",
  },
  components: {
    MuiButton: {
      defaultProps: {
        color: "inherit",
        variant: "text",
      },
    },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<App />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/products" element={<Products />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/free-crm" element={<FreeCrm />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
          </Route>
          <Route path="/contact-list" element={<ContactList />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
);
