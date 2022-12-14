import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function CheckboxC(props) {
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        name={props.name}
        id={props.id}
      >
        <FormControlLabel value="0" control={<Radio />} label="Si" />
        <FormControlLabel value="1" control={<Radio />} label="No" />
      </RadioGroup>
    </FormControl>
  );
}
