
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routeUser = require("./routes/routeUser");
const routeTopics=require('./routes/routeTopics')
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH"
  );
  res.setHeader("Access-Control-Allow-hEADERS", "Content-Type, Authorization");
  next();
});
const dbURL =
  "mongodb+srv://user1:udemy123@cluster0.uruni2p.mongodb.net/School4All?retryWrites=true&w=majority";
mongoose
  .connect(dbURL)
  .then((result) => {
    console.log("connected!");
    app.listen(8080);
  })
  .catch((err) => {
    console.log(err);
  });
app.use("/api", routeUser);
app.use("/api", routeTopics)
