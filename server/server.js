/* app.js is the project's entry point */
// const router = express.Router();
/*
 * Create express web server
 */
const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");

//middleware
app.use(express.json());
app.use(cors());

// routes
app.use(express.urlencoded({ extended: true}));
// const recoveries = require("./routes/api/recovery");

//URLS to access API
// app.use("api/recovery", recoveries)
// axios call


http: app.listen(5000, () => {
  console.log("server running on port 5000");
});

// module.exports = router;
