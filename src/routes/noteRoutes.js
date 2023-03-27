const express = require("express");
const noteRouter = express.Router();

noteRouter.get("/", (req, res) => {
  res.send("note get");
});

noteRouter.post("/", (req, res) => {
  res.send("note post");
});

module.exports = noteRouter;
