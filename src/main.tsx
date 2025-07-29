import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./i18n";

// 👇 Set direction before anything renders
const savedLang = localStorage.getItem("i18nextLng") || "en";
document.documentElement.setAttribute("dir", savedLang === "ar" ? "rtl" : "ltr");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);