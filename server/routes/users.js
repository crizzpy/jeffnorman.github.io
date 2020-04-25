const express= require('express')
const router = express.Router()
const User = require("../models/User.js");
const Formidable = require("formidable");
const bluebird = require("bluebird");
const fs = bluebird.promisifyAll(require("fs"));
const { join } = require('path') 
const ObjectId = require('mongodb').ObjectId;
const uuid = require('uuid')

router.post('/load', (req, res) => {
  const { uniqueId } = req.body
  // console.log(data) 
  // let searchId = new ObjectId(uniqueId);
  User.findOne({id:uniqueId})
  // User.findOne({id:uniqueId})
  .then(user => {
    if(user) {
      console.log(user)
      res.send(user)
    } else {
      console.log('user not found')
      res.json({msg: "user not found."})
    }
  }) 
  .catch(err => console.log(err))
})

router.post("/login", (req, res) => {
  const {username, password} = req.body
  const errors=[]
  console.log('try')               
  User.findOne({username:username})
    .then(user => {
        if(user) {
          if (user.password == password) {
            console.log(user)
            res.status(200).send(user)
          } else {
            errors.push({ password: `Incorrect password. Click 'Forgot Password' if you need to reset it.`})
            res.status(305).send(errors)
            console.log(errors);
          }
        } else {
          User.findOne({email:username})
            .then(user => {
              if(user) {
                if (user.password == password) {
                  res.status(200).send(user)
                } else {
                  errors.push({ password: `Incorrect password. Click 'Forgot Password' if you need to reset it.`})
                  res.status(305).send(errors)
                  console.log(errors);
                }
              } else {
                errors.push({ username: `Username or email not found.` });
                res.status(305).send(errors);
                console.log(errors);
              }
            })
        }
    })
});

router.post('/add', async (req, res) => {
  
  const {username, password, passwordTwo, email} = req.body
  // console.log(username, password, passwordTwo, email)
  const errors=[]
  User.findOne({email:email})
    .then(user => {
      if (user) {
        errors.push( {password: `This email is already registered. Click 'forgot password' if you need to reset it.`});
        res.status(200).send(errors);
      } else {
        const newUser = new User({
          username,
          id: uuid.v4(),
          password,
          email
        })
        try{
          const savedUser = newUser.save()  
        }
        catch(err) {
          res.json({msg: err})
        }
      }
    })

      
  res.end()
})


// form.on("progress", (bytesReceived, bytesExpected) => {
// });

// router.post()

module.exports = router