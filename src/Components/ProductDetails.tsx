import React from "react";
import { useParams } from "react-router-dom";
import { Grid, Container, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Rating from "@material-ui/lab/Rating";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { Link } from "react-router-dom";
import { store, add } from "../Store";


import { products } from "../Utility/API";

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "110vh"
  },
  image: {
    width: "100%",
  },
  AddToCart: {
    marginTop: theme.spacing(5),
    color: "white",
    backgroundColor: "black",
    width: "155px",
    margin: "10px",

    "&:hover": {
      backgroundColor: "#1d4aff",
      width: "160px",
    },
  },
  name: {
    
  },
}));

function ProductDetails() {
  const { id } = useParams();
  const ProductID = parseInt(id);
  const product = products[ProductID];
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Grid container spacing={2} style={{ background: "white", }}>
        <Grid item xs={12} md={6} >
          <img className={classes.image} src={product.imageURL}
            alt={product.name} />
        </Grid>
        <Grid item xs={12} md={6} >
          <Grid item style={{ textAlign: "left", marginTop : 20 }}>
            <Typography variant="h4" className={classes.name}>
              {product.name}
            </Typography>
            <Typography variant="h6" color="textSecondary" gutterBottom>
              {product.brand}
            </Typography>
          </Grid>
          <Grid item style={{ textAlign: "left", marginTop: 20 }}>
            <Grid item xs={12} style={{marginBottom: 20 }}>         
              <Typography style={{textAlign: "left", textTransform: "capitalize", padding: 5}}>
                {product.details}
              </Typography>
            </Grid>

            <Grid item xs={8} style={{ display: "flex", justifyContent: "space-Between"}}>
              <Typography variant="button">Price:</Typography>
              <Typography variant="button"> ${product.price}</Typography>

            </Grid>
            
            <Grid item xs={8} style={{ display: "flex", justifyContent: "space-Between"}}>
              <Typography variant="button">Items left:</Typography>
              <Typography variant="button">{product.items_left}</Typography>

            </Grid>
            
            <Grid item xs={8} style={{ display: "flex", justifyContent: "space-Between" }}>
              <Typography variant="button">Rating:</Typography>
              <Rating
                name="customized-empty"
                defaultValue={3.5}
                precision={0.5}
                emptyIcon={<StarBorderIcon fontSize="inherit" />}
              />
            </Grid>
            
          </Grid>

          <Grid item >
            <Button
              variant="contained"
              className={classes.AddToCart}
              startIcon={<AddShoppingCartIcon />}
              onClick={() => store.dispatch(add(product))}
              disabled={product.items_left <= 0}
            >
              Add to cart
            </Button>
            <Button variant="contained" className={classes.AddToCart}>
              <Link to="/shoes" style={{ textDecoration: "none", color: "white" }}              >
                Back </Link>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ProductDetails;
