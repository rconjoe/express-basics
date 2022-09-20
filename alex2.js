// the app starts on a server and listens on port 3000
const express = require("express");
//to set up the server
const app = express();
app.get();
//

app.get("/", (req, res) => {
  res.send(`
  <h1>What color is the sky on a clear day?<h1>
  <form action="/result" method="POST>
    <input type = "text" name="color">
    <form>
    `);
});

app.get("/about", (req, res) => {
  res.send("Thanks for learning more about us");
});

app.listen(3000);
