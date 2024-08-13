require("dotenv").config();
const express = require("express");
const app = express();
const morgan = require("morgan");
app.use(morgan("tiny"));
app.use(express.static("public"));
app.use(express.json());
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/hotel-management")
  .then(() => {
    console.log("database is connected");
  })
  .catch((e) => {
    console.log("database error");
  });
app.use("/", (req, res, next) => {
  req.body.country = "NP";
  next();
});

const indexrouter = require("./routes");

app.use("/", indexrouter);

app.use((err, req, res, next) => {
  const errsmg = err ? err.toString() : "something went wrong";
  res.status(500).json({ data: "", msg: errsmg });
});
PORT = Number(process.env.PORT) || 5111;

app.listen(PORT, () => {
  console.log(`the app is running on port ${PORT}`);
});
