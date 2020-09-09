import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  Divider,
  ListItemAvatar,
  ListItemSecondaryAction,
  IconButton,
  Avatar,
  Typography,
  ListItemText,
  Container,
  Grid,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { useSelector } from "react-redux";

import { store, remove } from "../Store";

interface shoeType {
  [x: string]: unknown;

  brand: string;
  category: string;
  details: string;
  gender: string;
  id: number;
  imageURL: string;
  is_in_inventory: boolean;
  items_left: number;
  name: string;
  price: number;
  slug: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    list: {
      height: "60vh",
      overflowY: "scroll",
    },

    inline: {
      display: "inline",
    },
    listItem: {
      padding: theme.spacing(1, 0),
      justifyContent: "flex-end",
    },
    total: {
      fontWeight: theme.typography.fontWeightBold,
      fontSize: theme.typography.fontSize * 2,
    },
  })
);

const Basket = () => {
  const products = useSelector((state: shoeType[]) => state);
  const classes = useStyles({});

  const price: any = (products.filter((product) => product.added)
  .reduce((acc, current: { price: number }) => (acc += current.price), 0) / 100).toFixed(1);

  const percent = price * 0.5;
  const total = price + percent;
  return (
    <Container>
      <Grid container spacing={2} className={classes.root}>
        <Grid item xs={12} md={9}>
          <List className={classes.list}>
            {products
              .filter((product) => product.added)
              .map((product: any) => (
                <div key={product.id}>
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar alt="Product" src={product.imageURL} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={product.name}
                      secondary={
                        <React.Fragment>
                          <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                          >
                            &pound;{(product.price / 100).toFixed(1)}
                          </Typography>
                        </React.Fragment>
                      }
                    />
                    <ListItemSecondaryAction>
                      <IconButton
                        edge="end"
                        aria-label="delete"
                        onClick={() =>
                          store.dispatch(remove({ id: product.id }))
                        }
                      >
                        <DeleteIcon style={{ fill: "red" }} />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>

                  <Divider variant="inset" component="li" />
                </div>
              ))}
          </List>
        </Grid>

        <Grid item xs={12} md={3}>
          <Grid
            item
            container
            justify="flex-end"
            spacing={1}
            style={{ textAlign: "left", alignItems: "flex-end" }}
          >
            <Grid item xs={4}>
              <Typography variant="button">Price:</Typography>
            </Grid>
            <Grid item xs={8} style={{ textAlign: "right" }}>
              <Typography variant="subtitle1">
                {(
                  products
                    .filter((product) => product.added)
                    .reduce(
                      (acc: any, current: { price: any }) =>
                        (acc += current.price),
                      0
                    ) / 100
                ).toFixed(1)}
              </Typography>
            </Grid>

            <Grid item xs={10}>
              <Typography variant="button">Shipping Charges:</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="button" style={{ }}>
                £0.00
              </Typography>
            </Grid>

            <Grid item xs={10}>
              <Typography variant="button">Tax (5% VAT):</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="button" style={{ borderBottom: "red" }}>
                £{percent}
              </Typography>
            </Grid>
            <Grid item xs={10}>
              <Typography variant="button" style={{ fontWeight: 600,  }}>
                Total Price:
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="subtitle1" style={{ fontWeight: 600 }}>
                £{total}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Basket;
