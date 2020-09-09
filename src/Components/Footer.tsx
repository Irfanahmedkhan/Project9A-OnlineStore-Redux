import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";

// import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "space-between",
    background: "black",
    width: "100%",
    minHeight: "10vh",
    itemAlign: "center",

    
  },
  text: {
    color: "white",
    textAlign: "center",
    fontWeight: 600,
    letterSpacing: "2px",
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <Grid container className={classes.container}>
      <div>
        <Typography className={classes.text}>
          {" "}
          Created by : Irfan Ahmed
        </Typography>
      </div>
      <div style={{}}>
        <Button
          startIcon={
            <GitHubIcon
              color="inherit"
              style={{
                width: "30px",
                height: "30px",
                backgroundColor: "white",
                borderRadius: "10%",
              }}
            />
          }
          href="https://github.com/Irfanahmedkhan"
        ></Button>
        <Button
          startIcon={
            <FacebookIcon
              color="inherit"
              style={{
                width: "30px",
                height: "30px",
                backgroundColor: "white",
                borderRadius: "10%",
              }}
            />
          }
          href="https://www.facebook.com/irfanahmed01"
        ></Button>
      </div>
    </Grid>
  );
}

export default Footer;
