import React, { useEffect, useState } from "react";
import axios from "axios";

import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";

import BookCard from "./components/book/BookCard";

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

function CategoryPage() {
  const classes = useStyles();

  const [books, setBooks] = useState({});
  const [openAlert, setOpenAlert] = React.useState(false);

  const handleAlertClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenAlert(false);
  };

  useEffect(() => {
    const axiosConfig = {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
      },
    };
    const fetchBooks = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/books",
          axiosConfig
        );

        if (response && response.status === 200) {
          setBooks(response.data);
        }
      } catch (err) {
        setOpenAlert(true);
        throw new Error(err);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className={classes.root}>
      <main className={classes.content}>
        <BookCard books={books} />
      </main>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        open={openAlert}
        autoHideDuration={5000}
        onClose={handleAlertClose}
        message="Error happened by retrieving data. Please reload page! "
        action={
          <React.Fragment>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleAlertClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
}

export default CategoryPage;
