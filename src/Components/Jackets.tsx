import React from "react";
import Jackets from "../Store/State_JacketStore";
import { Grid, Card, Typography, CardHeader, Avatar } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Rating from "@material-ui/lab/Rating";
import StarBorderIcon from "@material-ui/icons/StarBorder";

import { makeStyles } from "@material-ui/core/styles";
import nike from "../Images/nike.png";

const useStyles = makeStyles((theme) => ({
  Container: {
    display: "flex",
    justifyContent: "center",
    alignItems: " center",
  },

  Card: {
    width: "250px",
    height: "400px",
    "&:hover": {
      cursor: "pointer",
      background: "#F5F5F5",
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
    height: "40px",
  },

  media: {
    height: "280px",
    paddingTop: "56.25%", // 16:9
  },

  cardContent: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    fontSize: "0.5rem",
    minHeight: "80px",
  },
  cardContentText1: {
    width: "100%",
    textAlign: "left",
    maxHeight: "40px",
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
    width: "140px",
    height: "40px",
    textAlign: "center",
    itemAlign: "center",
    borderRadius: "5px",
    "&:hover": {
      backgroundColor: "#1d4aff",
      width: "145px",
    },
  },

  AddToCart: {
    color: "white",

    backgroundColor: "black",
    width: "150px",
    height: "40px",
    textAlign: "center",
    itemAlign: "center",
    "&:hover": {
      backgroundColor: "#1d4aff",
      width: "145px",
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
}));

function JacketsShop() {
  const classes = useStyles();

  return (
    <Grid container>
      {Jackets.map((jacket, i) => {
        return (
          <Grid
            item
            xs={12}
            sm={4}
            md={3}
            className={classes.Container}
            key={i}
          >
            <Card className={classes.Card}>
              <CardHeader
                className={classes.CardHeader}
                avatar={
                  <Avatar alt="NIKE" src={nike} className={classes.avatar} />
                }
                action={
                  <Typography component="p" className={classes.price}>
                    {jacket?.price}
                  </Typography>
                }
              ></CardHeader>

              <CardMedia
                className={classes.media}
                title={jacket.name}
                image={jacket?.images[0]}
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
                    {jacket?.name}
                  </Typography>
                </>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default JacketsShop;
