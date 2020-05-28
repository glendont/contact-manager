const express = require("express");
const router = express.Router();

//  @route  GET api/auth
//  @desc   Get logged in user
//  @access Private

router.get("/", (req, res) => {
  res.send("Get logged in user");
});

//  @route  POST api/auth (send data to get authenticated)
//  @desc   Authenticate user & get token
//  @access Public

router.post("/", (req, res) => {
  res.send("Log in User");
});

module.exports = router;
