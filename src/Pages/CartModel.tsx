import React from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";

import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";

import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
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
  Badge,
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
      height: "80vh",
      //   overflowY: "scroll",
      //   overflowX: "hidden",

      width: 250,
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
    cartText: {
      textAlign: "center",
      fontWeight: 400,
      marginTop: " 20px",
    },
    margin: {
      // margin: theme.spacing.unit * 2
    },
    customBadge: {
      backgroundColor: "red",
      color: "white",
      fontWeight: 600,

    },

    BasketText: {
      color: "white",
      background: "red",
      width: "18px",
      height: "20px",
      borderRadius: "50%",
      fontSize: "15px",

      alignItems: "center",
      fontWeight: 600,
    },

    fullList: {
      width: "auto",
    },

    link: {
      fontSize: "10px",
      textDecoration: "none",
      padding: 5,
      color: "white",
      fontWeight: 600,
      backgroundColor: "black",
      width: "110px",
      height: "30px",
      textAlign: "center",
      itemAlign: "center",
      "&:hover": {
        backgroundColor: "#1d4aff",
        width: "115px",
      },
      borderRadius: "5px",
    },
  })
);

type Anchor = "top" | "left" | "bottom" | "right";

export default function CartModel() {
  const products = useSelector((state: shoeType[]) => state);
  const classes = useStyles({});

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor: Anchor, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor: Anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Typography component="p" variant="body1" className={classes.cartText}>
        You have {products.filter((product) => product.added).length} items in
        your basket
      </Typography>
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
                        &pound;{(product.price / 100).toFixed(2)}
                      </Typography>
                    </React.Fragment>
                  }
                />
                <ListItemSecondaryAction>
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => store.dispatch(remove({ id: product.id }))}
                  >
                    <DeleteIcon style={{ fill: "red" }} />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>

              <Divider variant="inset" component="li" />
            </div>
          ))}
        <div>
          {products.filter((product) => product.added).length ? (
            <Button>
              <Link to="/checkout" className={classes.link}>
                Check Out
              </Link>
            </Button>
          ) : (
            ""
          )}
        </div>
      </List>
    </div>
  );

  return (
    <div>
      {(["right"] as Anchor[]).map((anchor) => (
        <React.Fragment key={anchor}>

          <Badge 
            classes={{ badge: classes.customBadge }}
            // className={classes.margin}
            onClick={toggleDrawer(anchor, true)}
            badgeContent={products.filter((product) => product.added).length } 
            color="secondary">
            <ShoppingBasketIcon style={{ fill: "white", width: "30px" }} />
          </Badge>

        
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
