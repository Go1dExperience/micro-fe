import { createContext, useContext, useState } from "react";
import { Snackbar, Alert } from "@mui/material";

const snackbarMethods = {
  closeSnackbar: () => {},
  openSnackbar: () => {},
};

const SnackbarContext = createContext(snackbarMethods);

const initialState = {
  message: "",
  type: "success",
  duration: 0,
  placement: {
    vertical: "top",
    horizontal: "right",
  },
  isOpen: false,
};

const SnackbarProvider = ({ children }) => {
  const [snackbar, setSnackbar] = useState(initialState);

  const openSnackbar = ({
    message,
    type,
    duration = 5000,
    placement = "topRight",
  }) => {
    // split topRight into [top, right]
    const [vertical, horizontal] = placement
      .split(/(?=[A-Z])/)
      .map(x => x.toLowerCase());
    setSnackbar({
      message,
      duration,
      type,
      placement: {
        vertical: vertical,
        horizontal: horizontal,
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
