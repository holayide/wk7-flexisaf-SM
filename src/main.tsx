import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { LoginProvider } from "./contexts/LoginContext.tsx";

createRoot(document.getElementById("root")!).render(
  <LoginProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </LoginProvider>
);