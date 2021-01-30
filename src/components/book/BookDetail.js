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

function BookDetail(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const book = props.book != undefined ? props.book : props.location.state.book;

  const handleClick = () => {
    if (localStorage.getItem("cart") === null) {
      localStorage.setItem("cart", JSON.stringify([book]));
    } else {
      const books = JSON.parse(localStorage.getItem("cart"));
      books.push(book);
      localStorage.setItem("cart", JSON.stringify(books));
    }
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <Card key={book.Title} className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {book.Title}
          </Typography>
          <Typography
            className={classes.title}
            color="textPrimary"
            gutterBottom
          >
            Author: <i>{book.Author}</i>
          </Typography>
          <Typography
            className={classes.title}
            color="textPrimary"
            gutterBottom
          >
            Genre: <i>{book.Genre}</i>
          </Typography>
          <Typography
            className={classes.title}
            color="textPrimary"
            gutterBottom
          >
            SubGenre: <i>{book.SubGenre}</i>
          </Typography>
          <Typography
            className={classes.title}
            color="textPrimary"
            gutterBottom
          >
            Height: <i>{book.Height}</i>
          </Typography>
          <Typography
            className={classes.title}
            color="textPrimary"
            gutterBottom
          >
            Publisher: <i>{book.Publisher}</i>
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={handleClick} size="small">
            Add Book
          </Button>
          <Snackbar
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            open={open}
            autoHideDuration={4000}
            onClose={handleClose}
            message="Book is added to the cart"
            action={
              <React.Fragment>
                <IconButton
                  size="small"
                  aria-label="close"
                  color="inherit"
                  onClick={handleClose}
                >
                  <CloseIcon fontSize="small" />
                </IconButton>
              </React.Fragment>
            }
          />
        </CardActions>
      </Card>
    </>
  );
}

export default BookDetail;
