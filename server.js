const express = require("express");
const mongoose = require("mongoose");

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");
// DB Config
const db = require("./config/keys").mongoURI;

const app = express();
// Connect to DB
mongoose
  .connect(db)
  .then(() => console.log("mongodb connection successful"))
  .catch(error => console.log(error));

app.get("/", (req, res) => res.send("hello from kek server.js"));

// Use routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

const port = process.env.PORT || 1337;

app.listen(port, () => console.log(`server started on ${port}`));
