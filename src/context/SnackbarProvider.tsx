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

  const variantColor: Record<string, string> = {
    error: "#ff5555",
    success: "#1dde50",
    info: "#518ded",
  };

  const showSnackbar = (
    message: string,
    variant: "error" | "success" | "info"
  ) => {
    setSnackbar({ message, variant });
  };

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      {snackbar && (
        <div
          className={`text-white flex-center p-[12px]`}
          style={{ background: variantColor[snackbar?.variant] }}
        >
          <h2 className="mx-auto text-center leading-[20px] font-[500] text-[14px]">
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
