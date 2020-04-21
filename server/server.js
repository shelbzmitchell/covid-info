/* app.js is the project's entry point */
const axios = require("axios");

/*
 * Create express web server
 */
const express = require("express");
const app = express();
const port = 5000;

// axios call

axios
  .get("https://bing.com/covid/data")
  .then((response) => {
    console.log(response.data.totalRecovered);
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(5000, () => {
  console.log("server running on port 5000");
});
