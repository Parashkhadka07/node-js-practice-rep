require("dotenv").config();
const express = require("express");

const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/hotel-mgt")
  .then(() => {
    console.log("database is connected");
  })
  .catch((e) => {
    console.log("database error");
  });

const morgan = require("morgan"); //just helops us to know the status of the server after applying methods amd creating
const indexrouter = require("./routes");

const app = express();
PORT = Number(process.env.PORT) || 6677;

app.use(morgan("tiny")); //for morgan
app.use(express.static("public"));
app.use(express.json());

app.use("/", indexrouter);
//console.log("fine");
app.use((err, req, res, next) => {
  const errsmg = err ? err.toString() : "something went wrong";
  res.status(500).json({ data: "", msg: errsmg }); //use res,status
});

app.listen(PORT, () => {
  console.log(`the api is running on PORT ${PORT}`);
});
