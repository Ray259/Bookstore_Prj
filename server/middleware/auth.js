const jwt = require("jsonwebtoken");

module.exports.authenticate = (req, res, next) => {
    const token = req.cookies.jwt;
    jwt.verify(token, "secret", (err, decodedToken) => {
        if (err) {
            res.redirect(process.env.CLIENT_URL + "/login");
        } else {
            console.log(decodedToken);
            req.user = decodedToken;
            next();
        }
    });
    if (token) {
    } else {
        res.redirect(process.env.CLIENT_URL + "/login");
    }
};
