const express = require("express");
const app = express();
const colors = require("colors");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 8000;
const mongoose = require("mongoose");
const path = require("path");

//****************************connecting to the database*************************************** */
const connectDB = require("./config/db");
connectDB();
//************************middleware*************************** */
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: false }));
// ****************************sending static files******************
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.get("/", (req, res) => {
  res.render("pages/index");
});

//*******************************route constants ***************/
app.use("/api", require("./routes/goalRoute"));
app.listen(port, () => {
  console.log(`server started on port:${port}`);
});
