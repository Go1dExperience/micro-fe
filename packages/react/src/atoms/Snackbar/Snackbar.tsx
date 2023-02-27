import React, { createContext, useContext, useState } from "react";
import { Snackbar, Alert } from "@mui/material";

interface SnackbarProps {
  message: string;
  type: "success" | "error" | "warning" | "info";
  duration?: number;
  placement?:
    | "topLeft"
    | "topRight"
    | "topCenter"
    | "bottomLeft"
    | "bottomRight"
    | "bottomCenter";
}
interface InitialState extends Omit<SnackbarProps, "placement"> {
  placement: {
    vertical: "top" | "bottom";
    horizontal: "left" | "right" | "center";
  };
  isOpen: boolean;
}

const snackbarMethods: {
  closeSnackbar: VoidFunction;
  openSnackbar: (option: SnackbarProps) => void;
} = {
  closeSnackbar: () => {},
  openSnackbar: () => {},
};

const SnackbarContext = createContext(snackbarMethods);

const initialState: InitialState = {
  message: "",
  type: "success",
  duration: 0,
  placement: {
    vertical: "top",
    horizontal: "right",
  },
  isOpen: false,
};

const SnackbarProvider = ({ children }: any) => {
  const [snackbar, setSnackbar] = useState<InitialState>(initialState);

  const openSnackbar = ({
    message,
    type,
    duration = 5000,
    placement = "topRight",
  }: SnackbarProps) => {
    // split topRight into [top, right]
    const [vertical, horizontal] = placement
      .split(/(?=[A-Z])/)
      .map(x => x.toLowerCase());
    setSnackbar({
      message,
      duration,
      type,
      placement: {
        vertical: vertical as "top" | "bottom",
        horizontal: horizontal as "left" | "right" | "center",
      },
      isOpen: true,
    });
  };

  const closeSnackbar = () => {
    setSnackbar(initialState);
  };
  return (
    <SnackbarContext.Provider value={{ openSnackbar, closeSnackbar }}>
      {children}
      {snackbar.isOpen && (
        <Snackbar
          open={snackbar.isOpen}
          autoHideDuration={snackbar.duration}
          onClose={closeSnackbar}
          anchorOrigin={snackbar.placement}
        >
          <Alert severity={snackbar.type} onClose={closeSnackbar}>
            {snackbar.message}
          </Alert>
        </Snackbar>
      )}
    </SnackbarContext.Provider>
  );
};

export const useSnackbar = () => useContext(SnackbarContext);
export default SnackbarProvider;
