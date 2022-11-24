import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import App from "./App";
import { ThemeContextProvider } from "./themeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </React.StrictMode>
);

/* ReactDOM.render(
  < ThemeContextProvider>
    <App />
  </ ThemeContextProvider>,
  document.getElementById("root")
);
 */
