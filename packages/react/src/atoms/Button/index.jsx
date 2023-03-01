import React from "react";
import Typography from "../Typography";
import Button from "@mui/material/Button";

const ButtonCustom = ({ title, fill = true, sx }) => {
  return (
    <Button
      sx={{
        borderRadius: "6px",
        background: fill ? "#eb6b46" : "white",
        border: "1px solid #eb6b46",
        padding: "7px 20px",
        ...sx,
      }}
    >
      <Typography
        variant="subtitle11"
        sx={{
          fontWeight: "bold",
          color: fill ? "white" : "#eb6b46",
        }}
      >
        {title}
      </Typography>
    </Button>
  );
};
export default ButtonCustom;
