import React, { forwardRef } from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

const cardStyles = makeStyles({
  root: {
    minWidth: "50%",
    marginBottom: 8,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function BookCard(props) {
  const classes = cardStyles();

  const { books } = props;

  return (
    <>
      {Object.keys(books).map((bookIndex) => {
        const book = books[bookIndex];

        // eslint-disable-next-line react/display-name
        const MyLink = forwardRef((props, ref) => (
          <Link
            to={{ pathname: "/bookdetail", state: { book } }}
            {...props}
            ref={ref}
          />
        ));

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
              <Button component={MyLink} size="small">
                Book in detail
              </Button>
            </CardActions>
          </Card>
        );
      })}
    </>
  );
}

export default BookCard;
