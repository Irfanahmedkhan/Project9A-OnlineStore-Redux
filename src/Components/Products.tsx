import React, { useState } from "react";
import { useSelector } from "react-redux";
import { store, add } from "../Store";

import {
  Grid,
  Paper,
  Card,
  Typography,
  Button,
  CardHeader,
  Avatar,
} from "@material-ui/core";
import { Tabs, Tab } from "@material-ui/core";
import CardAction from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Rating from "@material-ui/lab/Rating";
import StarBorderIcon from "@material-ui/icons/StarBorder";

import { makeStyles } from "@material-ui/core/styles";
import nike from "../Images/nike.png";

// import { products } from "../Utility/API";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  Container: {
    display: "flex",
    justifyContent: "center",
    alignItems: " center",
  },

  Card: {
    width: "250px",
    "&:hover": {
      cursor: "pointer",
      background: "#F5F5F5",
      fontFamily: "Barlow Condensed",
    },
    padding: 10,
    marginTop: 40,
    // background: 'linear-gradient(to right, #1d4aff , #307aff)',
  },

  CardHeader: {
    display: "flex",
    justifyContent: "space-between",
    itemAlign: "center",
    padding: 5,
    height: "35px",
  },

  media: {
    minHeight: "170px",
    paddingTop: "56.25%", // 16:9
    // [theme.breakpoints.down("md")]: {
    //   height: 200,
    // },
    // [theme.breakpoints.down("lg")]: {
    //   height: 180,
    // },
    // [theme.breakpoints.down("xs")]: {
    //   height: 180,
    // },
  },

  cardContent: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    fontSize: "0.5rem",
    minHeight: "80px",
    // color: ' white',
    padding: 5,
    // [theme.breakpoints.only("md")]: {
    //   flexDirection: "column",
    // },
    // [theme.breakpoints.only("xs")]: {
    //   flexDirection: "column",
    // },
  },
  cardContentText1: {
    width: "80%",
    textAlign: "left",
    maxHeight: "40px",
    // color: ' white',
  },

  h3ResponsiveText: {
    // [theme.breakpoints.only("md")]: {
    //   fontSize: "1rem",
    // },
    // [theme.breakpoints.only("xs")]: {
    //   fontSize: "0.9rem",
    // },
  },

  avatar: {
    backgroundColor: "white",
  },
  cardAction: {
    display: "flex",
    justifyContent: "space-between",
    maxHeight: "50px",
    color: " white",
    itemAlign: "center",
    padding: 5,
  },

  MoreDetails: {
    display: "flex",
    justifyContent: "center",
    color: " white",
    backgroundColor: "black",
    width: "120px",
    height: "30px",
    textAlign: "center",
    itemAlign: "center",
    "&:hover": {
      backgroundColor: "#1d4aff",
      width: "135px",
    },
  },

  AddToCart: {
    color: "white",
    fontSize: " 10px",
    backgroundColor: "black",
    width: "120px",
    height: "30px",
    textAlign: "center",
    itemAlign: "center",
    fontWeight: 600,
    letterSpacing: "1px",
    "&:hover": {
      backgroundColor: "#1d4aff",
      width: "135px",
    },
  },

  price: {
    fontWeight: 600,
    background: "black",
    color: "white",
    borderRadius: "10%",
    width: " 50px",
    height: " 30px",
    textAlign: "center",
    letterSpacing: "2px",
  },

  Tab: {
    color: "black",
    fontWeight: 600,
    fontFamily: "Barlow Condensed",
  },
}));

function Products() {
  const products = useSelector((state: any) => state);

  const [Shoes, setShoes] = useState(products);
  const [TabValue, setTabValue] = useState(0);
  let abc: any = [];
  const classes = useStyles();
  // const dispatch = useDispatch(function)

  // <---------- Filter Shoes by Gender -------->
  const All = () => {
    for (let shoe: number = 0; shoe < 34; shoe++) {
      abc.push(products[shoe]);
    }
    setShoes(abc);
    setTabValue(0);
  };
  const Men = () => {
    setShoes([]);
    for (let shoe = 0; shoe < products.length; shoe++) {
      if (products[shoe].gender === "MEN") {
        abc.push(products[shoe]);
        setShoes(abc);
        setTabValue(1);
      }
    }
  };
  const Women = () => {
    setShoes([]);
    for (let shoe = 0; shoe < products.length; shoe++) {
      if (products[shoe].gender === "WOMEN") {
        abc.push(products[shoe]);
        setShoes(abc);
        setTabValue(2);
      }
    }
  };
  const Kids = () => {
    setShoes([]);
    for (let shoe = 0; shoe < products.length; shoe++) {
      if (products[shoe].gender === "KIDS") {
        abc.push(products[shoe]);
        setShoes(abc);
        setTabValue(3);
      }
    }
  };
  // <---------- Filter Shoes by Gender -------->

  return (
    <Grid container style={{}}>
      <Grid container direction="row" justify="center" alignItems="center">
        <Paper>
          <Tabs
            style={{ width: "100%", color: "red" }}
            value={TabValue}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="ALL" onClick={All} className={classes.Tab} />
            <Tab label="MEN" onClick={Men} className={classes.Tab} />
            <Tab label="WOMEN" onClick={Women} className={classes.Tab} />
            <Tab label="KIDS" onClick={Kids} className={classes.Tab} />
          </Tabs>
        </Paper>
      </Grid>

      {Shoes.map(
        (
          shoe: {
            category: React.ReactNode;
            brand: string | undefined;
            imageURL: string | undefined;
            name: React.ReactNode;
            price: React.ReactNode;
          },
          i: number
        ) => {
          return (
            <Grid item xs={12} sm={4} md={3} className={classes.Container} key={i}>
              <Card className={classes.Card}>
                <CardHeader
                  className={classes.CardHeader}
                  avatar={
                    <Avatar alt="NIKE" src={nike} className={classes.avatar} />
                  }
                  action={
                    <Typography component="p" className={classes.price}>
                      {" "}
                      ${shoe?.price}
                    </Typography>
                  }
                  title={
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="h2"
                      style={{ color: "white" }}
                    >
                      {shoe?.category}
                    </Typography>
                  }
                ></CardHeader>

                <CardMedia
                  className={classes.media}
                  title={shoe?.brand}
                  image={shoe?.imageURL}
                />

                <CardContent className={classes.cardContent}>
                  <>
                    {" "}
                    <Rating
                      name="customized-empty"
                      defaultValue={3.5}
                      precision={0.5}
                      emptyIcon={<StarBorderIcon fontSize="inherit" />}
                    />
                  </>
                  <>
                    <Typography
                      component="p"
                      className={classes.cardContentText1}
                    >
                      {shoe?.name}
                    </Typography>
                  </>
                </CardContent>

                <CardAction className={classes.cardAction}>
                  <Button className={classes.MoreDetails}>
                    <Link
                      to={`/ProductDetails/${i}`}
                      style={{
                        textDecoration: "none",
                        color: "white",
                        fontSize: "10px",
                        fontWeight: 600,
                        letterSpacing: "1px",
                      }}
                    >
                      Details{" "}
                    </Link>
                  </Button>
                  <Button
                    className={classes.AddToCart}
                    onClick={() => store.dispatch(add(shoe))}
                  >
                    Add to Cart
                  </Button>
                </CardAction>
              </Card>
            </Grid>
          );
        }
      )}
    </Grid>
  );
}

export default Products;
