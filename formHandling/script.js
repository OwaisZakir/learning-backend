// Ensure that 'cookie-parser' is installed before proceeding.
// In this section, we will discuss the usage of 'section' and 'cookie'.
const express = require("express");
const app = express();

app.use(express.json()); // for reading JSON data
app.use(express.urlencoded({ extended: true })); // for reading URL-encoded data

app.get("/", (req, res) => {
  res.send("Bismillah");
});
app.get("/profile", (req, res) => {
  res.send("Bismillah");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
