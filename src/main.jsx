import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { UserProvider } from "./context/UserContext.jsx";
import { ActiveProvider } from "./context/ActiveContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ActiveProvider>
          <App />
        </ActiveProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
