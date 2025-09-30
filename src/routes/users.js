const express = require("express");
const { getUsernames } = require("../controllers/users");
const router = express.Router();

router.get("/", getUsernames);

module.exports = router;
