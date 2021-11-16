const express = require("express");
const exphbs = require("express-handlebars");
const cors = require("cors");

var app = express();

// Settings
app.set("port", process.env.PORT || 3000);
// app.engine(
//   ".hbs",
//   exphbs({
//     defaultLayout: "main",
//     extname: ".hbs",
//   })
// );

// middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Routes
app.use(require("./routes/index"));

// Static files

module.exports = app;
