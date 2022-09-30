import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Selector(props) {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="simple-select">{props.label || ""}</InputLabel>
        <Select
          {...props.register(props.name)}
          name={props.name}
          label={props.label || ""}
          onChange={(e) => props.onChange(e)}
        >
          {props.list.map((x, i) => {
            return (
              <MenuItem key={i} value={x[props.id]}>
                {x[props.nombre]}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
