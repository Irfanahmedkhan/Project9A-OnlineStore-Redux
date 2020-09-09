import React from "react";
import {
  createStyles,
  Theme,
  withStyles,
  makeStyles,
} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import { Typography } from "@material-ui/core";

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "black",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "blue",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "red",
      },
      "&:hover fieldset": {
        borderColor: "yellow",
      },
      "&.Mui-focused fieldset": {
        borderColor: "green",
      },
    },
  },
})(TextField);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
    },
    margin: {
      margin: theme.spacing(1),
    },
  })
);

export default function Shipping() {
  const classes = useStyles();

  return (
    <>
      <form className={classes.root} noValidate>
        <CssTextField
          className={classes.margin}
          id="custom-css-standard-input"
          label="First Name"
        />
        <CssTextField
          className={classes.margin}
          id="custom-css-standard-input"
          label="First Name"
        />
        <TextField
          id="standard-full-width"
          label="Address"
          style={{ margin: 8 }}
          placeholder="Full Address"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <CssTextField
          className={classes.margin}
          id="custom-css-standard-input"
          label="Email Address"
        />
        <CssTextField
          className={classes.margin}
          id="custom-css-standard-input"
          label="Mobile Number"
        />
      </form>
      <Typography style={{ color: "red", textAlign: "left" }}>
        * Your data are secured with us
      </Typography>
    </>
  );
}
