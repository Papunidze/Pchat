import { ReactNode, createContext, useContext, useState } from "react";

interface SnackbarContextProps {
  showSnackbar: (
    message: string,
    variant: "error" | "success" | "info"
  ) => void;
}

const SnackbarContext = createContext<SnackbarContextProps | undefined>(
  undefined
);

export const SnackbarProvider = ({ children }: { children: ReactNode }) => {
  const [snackbar, setSnackbar] = useState<{
    message: string;
    variant: "error" | "success" | "info";
  } | null>(null);

  const showSnackbar = (
    message: string,
    variant: "error" | "success" | "info"
  ) => {
    setSnackbar({ message, variant });

    setTimeout(() => {
      setSnackbar(null);
    }, 5000);
  };

  const getBackgroundColor = (variant: "error" | "success" | "info") => {
    switch (variant) {
      case "error":
        return "bg-error";
      case "success":
        return "bg-succses";
      case "info":
        return "bg-info";
    }
  };

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      {snackbar && (
        <div
          className={`flex items-center justify-center p-2 z-50 absolute w-full animate-fade ${getBackgroundColor(
            snackbar.variant
          )}`}
        >
          <h2
            className={`text-center font-medium text-base text-clear text-${snackbar.variant}`}
          >
            {snackbar.message}
          </h2>
        </div>
      )}
      {children}
    </SnackbarContext.Provider>
  );
};
// eslint-disable-next-line react-refresh/only-export-components
export const useSnackbar = () => {
  const context = useContext(SnackbarContext);
  if (!context) {
    throw new Error("useSnackbar must be used within a SnackbarProvider");
  }
  return context;
};
