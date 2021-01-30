import React, { forwardRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    "&:hover": {
      cursor: "pointer",
    },
  },

  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

function Header() {
  const classes = useStyles();
  const history = useHistory();

  const handleClick = () => {
    history.push("/");
  };

  // eslint-disable-next-line react/display-name
  const CartLink = forwardRef((props, ref) => (
    <Link to={{ pathname: "/cart", state: {} }} {...props} ref={ref} />
  ));

  return (
    <>
      <AppBar placeholder="Header" position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          ></IconButton>
          <Typography
            variant="h6"
            className={classes.title}
            onClick={handleClick}
          >
            Book Shop
          </Typography>
          <Button component={CartLink} color="inherit">
            Cart
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
