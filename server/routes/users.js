const express= require('express')
const router = express.Router()
const User = require("../models/User.js");


router.get("/login", (req, res) => {
  console.log("check");
  User.find()
    .then(users => res.render(users))
    .catch(err => res.status(400).json(`Error: ${err}`));
  console.log("done");
});
