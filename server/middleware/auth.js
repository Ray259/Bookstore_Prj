const jwt = require("jsonwebtoken");
const secretkey = process.env.SECRET_KEY || "secret";

module.exports.authenticate = (req, res, next) => {
    const token = req.cookies.jwt;
    jwt.verify(token, secretkey, (err, decodedToken) => {
        console.log("token", decodedToken);
        req.user = decodedToken;
        next();
    });
};
