const express = require("express");
const router = express.Router();

router.get("/hello", (req, res) => {
    console.log('testing')
})
// router.post()

module.exports = router;
