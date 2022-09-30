import * as React from "react";
import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function Check(props) {
  return (
    <div>
      <Checkbox {...label} onChange={props.change} />
    </div>
  );
}
