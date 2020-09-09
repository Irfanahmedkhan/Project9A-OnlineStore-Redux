import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Grid } from "@material-ui/core";
import Cart from "../Pages/CartModel";
import logo from "../Images/logo.png";


// import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "space-between",
    minHeight: "10vh",

  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    background: "#003e7b",
  },
  link: {
    textDecoration: "none",
    padding: 5,
    color: "white",
    fontWeight: 600,
  margin: "5px", 
    width: "120px",
    height: "20px",
    

    letterSpacing: "1px",

    "&:hover": {
      backgroundColor: "black",
      width: "125px",
      borderRadius: "5px",
      
    },
  },
  links: {
    display: "flex",
    justifyContent: "space-between",
  },
  rightContainer: {
    [theme.breakpoints.up("md")]: {
      marginLeft: 80,
    },
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <Grid xs={12}  className={classes.container}>
      <AppBar position="sticky" className={classes.appBar}>
        <Toolbar className={classes.container}>
          <div>
            <Link to="/">
              <img src={logo} alt="logo" width="80px" height="35px" />
            </Link>
          </div>

          <div >
            <Link to="/" className={classes.link}>
              HOME
            </Link>

            <Link to="/Products" className={classes.link}>
              SHOES{" "}
            </Link>

            <Link to="/JacketsShop" className={classes.link}>
              JACKETS{" "}
            </Link>
          </div>

          
          <div>
            <Cart />
          </div>
        </Toolbar>
      </AppBar>
    </Grid>
  );
}

export default Navbar;
