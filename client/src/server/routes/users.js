const express = require('express')
const router = express.Router()
const User = require("../models/User.js");

router.get('/login', (req, res) => {
    console.log('check')
    User.find()
        .then(users => res.render(users))
        .catch(err => res.status(400).json(`Error: ${err}`))
    console.log('done')
})

// router.post("/add", async (req, res) => {
//   const user = new User({
//     email: req.body.email,
//     username: req.body.username,
//     password: req.body.password,
//     password2: req.body.passwordTwo
//   });

//   try {
//     const savedUser = await user.save();
//     res.json(savedPost);
//   } catch (err) {
//     res.json({ msg: err });
//   }
//   // console.log(req.body)
// });