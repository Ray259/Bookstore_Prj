require("dotenv").config();
const express = require("express");
const app = express();
const db = require("./models");
const router = require("./routes/routes.js");
const cors = require("cors");
require("./auth/passport");
let port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/", router);

db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log("Server running on port " + port);
    });
});
