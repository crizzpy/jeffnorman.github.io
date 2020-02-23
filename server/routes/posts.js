const express = require("express");
const router = express.Router();
const Post = require("../models/Post.js");

router.get("/test", (req, res) => {
  res.send("hello");
});

router.get('/retrieve', (req, res) => {
    Post.find()
    .then(posts => {
        res.send(posts);
    })
    .catch(err => console.log(err))
})

router.post("/add", (req, res) => {
     
 

    post.save();
    res.end();
});

// router.post()

module.exports = router;
