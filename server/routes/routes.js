const express = require("express");

const router = express.Router();

const { authenticate } = require("../middleware/auth");

const authController = require("../controller/authController");

const bookController = require("../controller/bookController");

const userController = require("../controller/userController");

const cartController = require("../controller/cartController");

//auth
//google passport
router.get("/auth/google", authController.authenticateGoogle);

router.get("/auth/google/callback", authController.googleCallback);

//conventional authentication
router.post("/register", authController.register);

router.post("/login", authController.login);

router.get("/logout", authController.logout);

//books

router.get("/books", bookController.getAll);

router.post("/books/create", bookController.create);

router.post("/books/delete/:isbn", bookController.delete);

router.post("/books/update", bookController.update);

router.get("/books/query", bookController.query);

//books genre

router.get("/books/genres", bookController.getAllGenres);

router.get("/books/categories", bookController.getAllCategories);

//users
router.get("/user-profile", authenticate, userController.getPersonal);

router.get("/users", userController.getAll);

router.post("/users/create", userController.create);

router.post("/users/delete/:id", userController.delete);

//cart
router.get("/my-cart", authenticate, cartController.view);

router.post("/add-to-cart", authenticate, cartController.add);



//order


module.exports = router;
