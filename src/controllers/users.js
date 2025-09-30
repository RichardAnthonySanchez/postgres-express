const path = require("path");
const db = require("../../db/queries");

async function getUsernames(req, res) {
  const usernames = await db.getAllUsernames();
  res.send("Usernames: " + usernames.map((user) => user.username).join(", "));
}

async function createUsernameGet(req, res) {
  res.sendFile(path.join(process.cwd(), "public", "newUserForm.html"));
}

async function createUsernamePost(req, res) {
  const { name } = req.body;
  console.log("User submitted:", name);
  await db.insertUsername(name);
  res.redirect("/users");
}

module.exports = {
  getUsernames,
  createUsernameGet,
  createUsernamePost,
};
