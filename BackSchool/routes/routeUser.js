const express = require("express");
const feedUsersController = require("../controllers/feedUsers");
const router = express.Router();
const { body } = require("express-validator");
const isAuth = require("../middleware/is-auth");

router.post(
  "/addNewUser",
  [
    body("familyName").trim(),
    body("lastname").trim(),
    body("email").trim().isEmail(),
    body("password").trim().isLength({ min: 8 }),
    body("role").trim(),
  ], 
  feedUsersController.addUsers
);
router.post("/login",  feedUsersController.signinUser);

module.exports = router;
