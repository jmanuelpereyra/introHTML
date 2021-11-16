const { urlencoded } = require("express");
const express = require("express");
const path = require("path");
const app = express();

const publicPath = path.resolve(__dirname, "./public");

app.use(express.static(publicPath));
// app.use(express.json);
app.use(urlencoded({ extended: true }));

app.listen(3000, () => {
  console.log("Servidor OK");
});

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/home.html"));
});
app.get("/register", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/register.html"));
});
app.get("/login", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/login.html"));
});

// app.post("/register", (req, res) => {
//   console.log(req.body);
//   res.sendFile(path.resolve(__dirname, "./views/register.html"));
// });
// app.post("/login", (req, res) => {
//   console.log(req.body);
//   res.sendFile(path.resolve(__dirname, "./views/login.html"));
// });
