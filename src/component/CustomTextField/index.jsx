import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiInputBase-input": {
      padding: "10px  12px 8px 12px", // customize padding here
    },
  },
}));

function CustomTextField(props) {
  const classes = useStyles();

  return <TextField className={classes.root} variant="outlined" {...props} />;
}

export default CustomTextField;
