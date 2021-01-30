import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

function Cart() {
  const classes = useStyles();

  const [books, setBooks] = useState(JSON.parse(localStorage.getItem("cart")));
  const [openAlert, setOpenAlert] = React.useState(false);

  const handleDeleteClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenAlert(false);
  };
  const handleDelete = (book) => {
    try {
      const tmp = [];
      books.forEach((b) => {
        if (b !== book) tmp.push(b);
      });
      localStorage.setItem("cart", JSON.stringify(tmp));
      setBooks(tmp);
    } catch (err) {
      setOpenAlert(true);
      throw new Error(err);
    }
  };

  useEffect(() => {}, [books]);

  if (books === [] || books === null || books === undefined) {
    return (
      <div className={classes.root}>
        <main className={classes.content}>
          <p>No item</p>
        </main>
      </div>
    );
  }

  return Object.keys(books).map((bookIndex) => {
    const book = books[bookIndex];
    return (
      <Card key={book.Title} className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {book.Title}
          </Typography>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {book.Author}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => handleDelete(book)}>
            Remove Item
          </Button>
          <Snackbar
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            open={openAlert}
            autoHideDuration={5000}
            onClose={handleDeleteClose}
            message="Error happened by deleting item."
            action={
              <React.Fragment>
                <IconButton
                  size="small"
                  aria-label="close"
                  color="inherit"
                  onClick={handleDeleteClose}
                >
                  <CloseIcon fontSize="small" />
                </IconButton>
              </React.Fragment>
            }
          />
        </CardActions>
      </Card>
    );
  });
}

export default Cart;
