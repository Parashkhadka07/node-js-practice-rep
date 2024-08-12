require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.static("public"));
app.use(express.json());

PORT = Number(process.env.PORT) || 5111;
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

app.listen(PORT, () => {
  console.log(`the app is running on port ${PORT}`);
});
