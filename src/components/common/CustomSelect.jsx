
import React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";

const CustomSelect = ({
  label,
  options = [],
  value,
  onChange,
  className = "",
  name,
  disabled = false,
  placeholder = "Select an option",
}) => {
  return (
    <FormControl
      variant="standard"
      fullWidth
      className={className}
    >
      {label && (
        <InputLabel id={`${name}-label`}>{label}</InputLabel>
      )}
      <Select
        labelId={`${name}-label`}
        id={`${name}-select`}
        value={value}
        onChange={onChange}
        disabled={disabled}
        displayEmpty
      >
        {/* Optional placeholder */}
        <MenuItem value="" disabled>
          {placeholder}
        </MenuItem>

        {options.map((opt) => (
          <MenuItem key={opt.value} value={opt.value}>
            {opt.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CustomSelect;

