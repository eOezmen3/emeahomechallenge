const router = require("express").Router();
const csv = require("csvtojson");

router.get("/books", async (req, res) => {
  try {
    const jsonBooks = await csv().fromFile("./books.csv");
    res.status(200).json(jsonBooks);
  } catch (err) {
    res
      .status(500)
      .send("Error happened while returning books from the server");
    throw new Error(err);
  }
});

module.exports = router;
