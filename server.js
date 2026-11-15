const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const connectDB = require('./config/db');

connectDB();

app.get("/", (req, res) => {
  res.status(200).json({
    msg: "My app is up"
  })
})

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`)
}) 