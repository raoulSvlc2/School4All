const express = require("express");
const feedTopicsController = require("../controllers/feedTopics");
const router = express.Router();
const { body } = require("express-validator");

router.post(
  "/addNewTopic",
  [
    body("label").trim(),
  ],
  feedTopicsController.addTopic
);

module.exports = router;
