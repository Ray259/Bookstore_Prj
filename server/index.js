require("dotenv").config();
const express = require("express");
const app = express();
const db = require("./models");
const router = require("./routes/routes.js");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("./auth/passport");
let port = process.env.PORT || 8080;

app.use(cors({ credentials: true, origin: process.env.CLIENT_URL }));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/", router);

db.sequelize.sync({ alter: true }).then(() => {
    app.listen(port, () => {
        console.log("Server running on port " + port);
    });
});
