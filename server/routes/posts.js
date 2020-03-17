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

router.post("/add", async (req, res) => {
    const { userId, userIsAdmin, userFirstName, userLastName, id, adminsOnly, content} = req.body
    console.log(userId, userFirstName, userLastName, id, adminsOnly, content)
    const newPost = new Post({
        userId,
        userIsAdmin,
        userFirstName, 
        userLastName, 
        id, 
        adminsOnly, 
        content
    })
    
    try {
        const savedPost = await newPost.save()
        res.json(savedPost)
    } catch (err) {
        console.log(err)
        res.json({ msg: err })
    }
    
})

router.delete("/delete", async (req, res) => {
    const { postId } = req.body
    console.log(postId) 
    try{
        const removedPost = await Post.deleteOne({ id: postId })
        res.send(postId)
    } catch {err => {
        res.json(err)
    }}
})

//     newPost.save();
//     res.end();
// router.post()

module.exports = router;
