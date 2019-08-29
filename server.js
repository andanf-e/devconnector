const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to DB
mongoose
  .connect(db)
  .then(() => console.log("mongodb connection successful"))
  .catch(error => console.log(error));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport.js")(passport);

// Use routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

const port = process.env.PORT || 1337;

app.listen(port, () => console.log(`server started on ${port}`));