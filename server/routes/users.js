const express= require('express')
const router = express.Router()
const User = require("../models/User.js");
const Formidable = require("formidable");
const bluebird = require("bluebird");
const fs = bluebird.promisifyAll(require("fs"));
const { join } = require('path') 

router.post("/login", (req, res) => {
  const {username, password} = req.body
  const errors=[]
  console.log('try')               
  User.findOne({username:username})
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

const createUploadsFolder = async folder => {
  try{
    await fs.statAsync(folder)
  } catch (err) {
    console.log(err.code)
    if (err && err.code == "ENOENT") {
      try {
       await fs.mkdirAsync(folder) 
      } catch(err) {
        console.log("Error creating the uploads folder")
        return false
      }
    } else {
      console.log(`Error reading the upload folder: ${e}`)
      return false
      
    }
  }
  return true
}

const checkFileType = file => {
  // const type = file.type.split('/').pop()
  // const validTypes = ["png","jpg","jpeg"]
  // console.log(validTypes.findIndex(type));
  // if(!validTypes.findIndex(type) == -1) {
  //   console.log(`The filetype isinvalid: ${type}`)
  //   return false
  // }
  // return true
};

router.post('/upload', async (req, res) => {  
  console.log(req.body)
  let form = new Formidable.IncomingForm()
  const uploadFolder = join(__dirname, 'images', 'uploads')
  console.log(uploadFolder)
  // form.multiples = false
  form.keepExtensions = true
  form.maxFileSize = 10 * 24 * 24 // 10MB
  form.uploadDir = uploadFolder
  console.log(form)

  const folderExists = await createUploadsFolder(uploadFolder)
  if (!folderExists) {
    return res.json({ok: false, msg: "There was an error reading/creating the upload folder"})
  }
  let myUploadedFiles = [];
  form.on('file', file => {
    myUploadedFiles.push(file)
  })
  console.log(myUploadedFiles)

  form.parse(req, async(err, fields, files) => {
    let myUploadedFiles = [];
    if (err) {
      console.log("Error parsing the file");
      return res.json({ok: false, msg: "Error Parsing the files"})
    }
    const file = files.files
    console.log(fields)
    console.log(file)
    // const isValid = checkFileType(file)
    // const fileName = encodeURIComponent(file.name.replace(/&. *;+/g, '-'))
    // if (!isValid) {
    //   return res.json({ok: false, msg: "File received is invalid. Please upload a png, jpg, or jpeg"})
    // }
    // try {
    //   await fs.renameAsync(file.path, join(uploadFolder, fileName))
    // } catch (err) {
    //   console.log('File upload failed, removing temp file')
    //   try{ await fs.unlinkAsync(file.path) } catch(err) {}
    //   return res.json({ok: false, msg: "File could not be uploaded.       "}) 
    // }
    // return res.json({ok: true, msg: "The picture has been uploaded."})
    // res.status(400).send('Error')
    res.send("ok")
  })
})

// form.on("progress", (bytesReceived, bytesExpected) => {
// });

// router.post()

module.exports = router