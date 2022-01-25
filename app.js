const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");

app.set("view engine", "ejs");
app.set("views", "views");

const routes = require("./routes/route");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

app.use((req, res, next) => {
  res.status(404).render("pages/errorpage", { pageTitle: "Page Not Found" });
});

app.listen(3000, () => {
  console.log("server running");
});
