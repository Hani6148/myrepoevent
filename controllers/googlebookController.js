const db = require("../models");
const axios = require("axios");
// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    console.log("in")
    axios
    .get("https://www.googleapis.com/books/v1/volumes", { params: req.query })
    .then( results =>
      {
          console.log(results.data)
        res.json(results.data)
      })
    .catch(err => res.status(422).json(err));
  } 
};
