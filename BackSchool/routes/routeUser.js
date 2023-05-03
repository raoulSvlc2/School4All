const express = require("express");
const feedUsersController = require("../controllers/feedUsers");
const router = express.Router();
const { body } = require("express-validator");

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

module.exports = router;
