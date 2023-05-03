import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserProvider } from "./Providers/UserContext";
import { LinkProvider } from "./Providers/LinkContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <LinkProvider>
          <App />
        </LinkProvider>
        <ToastContainer />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
