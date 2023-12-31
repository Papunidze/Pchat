import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "@/App.tsx";

import { BrowserRouter } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { SnackbarProvider } from "@/context/snackbar-provider";
import { CheckLoginProvider } from "@/context/login-provider";
import { QueryClient, QueryClientProvider } from "react-query";

import "@/lib/icons/icons";
import "@/index.css";
import { DarkModeProvider } from "./context/dark-mode-provider";
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <Helmet defaultTitle="Pchat" titleTemplate="Pchat | %s" />
      <QueryClientProvider client={queryClient}>
        <CheckLoginProvider>
          <BrowserRouter>
            <Suspense fallback={null}>
              <SnackbarProvider>
                <DarkModeProvider>
                  <App />
                </DarkModeProvider>
              </SnackbarProvider>
            </Suspense>
          </BrowserRouter>
        </CheckLoginProvider>
      </QueryClientProvider>
    </HelmetProvider>
  </React.StrictMode>
);
