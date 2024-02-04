const express = require("express");

const router = express.Router();

const passport = require("passport");

const authController = require("../controller/authController")

const bookController = require("../controller/bookController");

const userController = require("../controller/userController");

const cartController = require("../controller/cartController");

//auth
router.get("/auth/google", passport.authenticate("google", { scope: ["profile"], session: false }));

router.get("/auth/google/callback", (req,res,next) =>{
    passport.authenticate("google", (err,profile) => {
        req.user = profile
        next()
    }) (req, res, next)
});


router.post("/register", authController.register)

router.post("/login", authController.login)

//books

router.get("/books", bookController.getAll);

router.post("/books/create", bookController.create);

router.post("/books/delete/:isbn", bookController.delete);

router.post("/books/update", bookController.update);

//users

router.get("/users", userController.getAll);

router.post("/users/create", userController.create);

router.post("/users/delete/:id", userController.delete);

//cart

router.get("/cart/:id", cartController.view);

module.exports = router;
