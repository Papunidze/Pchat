import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { SnackbarProvider } from "@/utils/snackbar/snackbar-provider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <Helmet defaultTitle="Pchat" titleTemplate="Pchat | %s" />
      <BrowserRouter>
        <Suspense fallback={null}>
          <SnackbarProvider>
            <App />
          </SnackbarProvider>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
