const express = require("express");
const router = express.Router();

const {
  createUsernamePost,
  createUsernameGet,
} = require("../controllers/users");

router.get("/", createUsernameGet);

router.post("/", createUsernamePost);

module.exports = router;
