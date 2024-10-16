import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./compomentes/Navbar.jsx";
import { Proveedor } from "./contexto/Proveedor.jsx";
import { Footer } from "./compomentes/Footer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar />
    <Proveedor>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Proveedor>
    <Footer />
  </StrictMode>
);
