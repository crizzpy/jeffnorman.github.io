const express = require("express");
const router = express.Router();
const Post = require("../models/Post.js");

router.get("/test", (req, res) => {
  res.send("hello");
});

router.get('/retrieve', (req, res) => {
    Post.find()
    .then(posts => {
        console.log(posts)
        res.send(posts);
        
    })
    .catch(err => console.log(err))
})

router.post("/add", (req, res) => {
    const {userId, id, adminsOnly, content} = req.body
    console.log(userId, content)
//     const newPost = new Post({

//     })
 

//     newPost.save();
//     res.end();
});

// router.post()

module.exports = router;
