const express = require("express");
const app = express();

const port = 8000;
const host = "localhost";

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(port, host, () => {
  console.log(`server dang chay trên http://${host}:${port}`);
});
