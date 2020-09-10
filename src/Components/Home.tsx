import React from "react";
import NewArival from "../Store/State_Home";
import { Grid, Card, Typography } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  Container: {
    display: "flex",
    justifyContent: "space-Between",
    flexDirection: "column",
    alignItems: " center",
    height: "85vh",
    overflow: "auto"
  },
  CardContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: " center",
    margin: 10,
  },

  MainText: {
    display: "flex",
    justifyContent: "center",
    alignItems: " center",
  },

  Main: {
    display: "flex",
    justifyContent: "center",
    alignItems: " center",
    marginBottom: 10,
  },

  Card: {
    width: "150px",
    height: "230px",
    "&:hover": {
      cursor: "pointer",
      background: "#F5F5F5",
    },
    padding: 10,
    marginTop: 40,
  },

  media: {
    minHeight: "160px",
    paddingTop: "56.25%", // 16:9
  },

  cardContent: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    fontSize: "0.5rem",
    minHeight: "80px",
    width: "100%",
  },
  cardContentText: {
    textAlign: "center",
    maxHeight: "40px",
    fontWeight: 600,
    fontSize: "13px",
  },
}));

function Home() {
  const classes = useStyles();

  return (
    <Grid container className={classes.Container}>
      {/* <Grid item className={classes.MainText}>
        <Typography component="p" style={{
          color: "white", textAlign: "left", fontWeight: 600, letterSpacing: "2px", fontFamily: "Barlow Condensed", marginTop: "20px", fontSize: "20px"
        }} > NIKE STORE </Typography>

      </Grid> */}
      <Grid item>
        <Grid item style={{ height: "5vh" }}>
          <Typography
            component="p"
            style={{
              color: "white",
              textAlign: "left",
              fontWeight: 600,
              letterSpacing: "2px",
              fontFamily: "Barlow Condensed",
              marginTop: "20px",
              marginLeft: "20px",
              fontSize: "25px",
            }}
          >
            New Arrival{" "}
          </Typography>
        </Grid>
        <Grid item className={classes.Main}>
          {NewArival.map((New, i) => {
            console.log(New);

            return (
              <Grid
                item
                xs={12}
                sm={4}
                md={3}
                key={i}
                className={classes.CardContainer}
              >
                <Link to="/shoes">
                  <Card className={classes.Card}>
                    <CardMedia className={classes.media} image={New?.images} />
                    <CardContent className={classes.cardContent}>
                      <Typography
                        component="p"
                        className={classes.cardContentText}
                      >
                        {New?.name}{" "}
                      </Typography>
                    </CardContent>
                  </Card>
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Home;
