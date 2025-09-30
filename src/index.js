const express = require("express");
const app = express();
const router = express.Router();
const path = require("path");
require("dotenv").config();

app.use(express.urlencoded({ extended: true }));

const userRoute = require("./routes/users");
const newUser = require("./routes/newUser");

const PORT = 3000;
//const HOST = "0.0.0.0";

app.use(express.static(path.join(process.cwd(), "public")));

app.use("/users", userRoute);
app.use("/new", newUser);

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`));

module.exports = router;
