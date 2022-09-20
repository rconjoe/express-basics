const app = require("express")();

const { join } = require("path");

function myMiddleware(req, res, next) {
  const date = new Date().toJSON();
  console.log(`request for route "${req.path}" at` + date);

  next();
}
app.use(myMiddleware);

function onHomeGetRequest(req, res) {
  if (req.query && req.query.user) {
    console.log(`user ${req.query.user} has landed`);
  }
  console.log(nba_finals.csv);
  res.sendFile(join(__dirname, "public", "nba_finals.csv"));
}

app.get("/", onHomeGetRequest);

app.get("/pickles", (req, res) => {
  res.json({
    message: "Welcome to Pickle Page",
  });
});

// where is favicon coming from
// how to create different endpoints ex localhost:3004/api/proudcts
app.listen(3004, () => console.log("listening on 3004"));
