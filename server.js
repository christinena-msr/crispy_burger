const express = require("express");
PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

const exhbs = require("express-handlebars");

app.engine("handlebars", exhbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require("./controllers/burger_controller.js");

app.use(routes);

app.listen(PORT, function() {
    console.log(`App listening on localhost: ${PORT}`);
})