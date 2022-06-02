import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import MainContextProvider from "./contexts/MainContext";
import PemakaianContextProvider from "./contexts/PemakaianContext";
import ThemeContextProvider from "./contexts/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeContextProvider>
        <MainContextProvider>
          <PemakaianContextProvider>
            <App />
          </PemakaianContextProvider>
        </MainContextProvider>
      </ThemeContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
