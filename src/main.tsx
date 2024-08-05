import React from "react";
import ReactDOM from "react-dom/client";
import Welcome from "./pages/Welcome.tsx";
import "./styles/index.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Welcome />} path="/" />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
