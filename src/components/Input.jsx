import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function TexfieldC(props) {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "35ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        error={false}
        helperText="Campo obligatorio *"
        fullWidth
        id={props.id}
        name={props.name}
        label={props.texto}
        type={props.type}
        variant="outlined"
        size={props.size}
      />
    </Box>
  );
}
