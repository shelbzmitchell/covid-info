const express = require("express");
const axios = require("axios");

axios
  .get("https://bing.com/covid/data")
  .then((response) => {
    console.log(response.data.totalRecovered);
  })
  .catch((error) => {
    console.log(error);
    module.exports = router;
  });
  

