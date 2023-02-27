import * as React from "react";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";

const TextInput = ({ label, type, adornment, ...props }) => {
  return (
    <FormControl>
      {label ? (
        <InputLabel htmlFor="input-with-icon-adornment">
          React MF
        </InputLabel>
      ) : null}
      <Input
        id="input-with-icon-adornment"
        {...props}
        startAdornment={
          adornment ? <InputAdornment position="start">
          {adornment}
            </InputAdornment> : null
        }
        sx={{
          borderRadius: "8px",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#D0D5DD",
          },
          "& input": {
            padding: "10px 14px",
            fontSize: "14px",
          },
          ...props.sx,
        }}
      />
    </FormControl>
  );
};

export default TextInput;
