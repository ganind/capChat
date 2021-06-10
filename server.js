const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsPtions = {
    origin: "*"
};

app.use(cors(corsPtions));

// access public folder
app.use(express.static('public'));

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    // To avoid CORS problems
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
})

// simple route
app.get("/", (req, res) => {
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.json({ message: "Bienvenue à CapChat." });
});

require("./image/image.routes")(app);
require("./artiste/artiste.routes")(app);

// set port, listen for requests
app.listen(3000, () => {
    console.log("Server is running on port 3000.");
});
