const express = require('express')
const router = express.Router()
const Formidable = require("formidable");
const bluebird = require("bluebird");
const fs = bluebird.promisifyAll(require("fs"));
const { join } = require('path')

const createUploadsFolder = async folder => {
    try {
        await fs.statAsync(folder)
    } catch (err) {
        console.log(err.code)
        if (err && err.code == "ENOENT") {
            try {
                await fs.mkdirAsync(folder)
            } catch (err) {
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
    const uploadFolder = join(__dirname, '..', 'uploads')
    // form.multiples = false
    form.keepExtensions = true
    form.maxFileSize = 10 * 24 * 24 // 10MB
    form.uploadDir = uploadFolder
    console.log(form)

    const folderExists = await createUploadsFolder(uploadFolder)
    console.log(folderExists)
    if (!folderExists) {
        return res.json({ ok: false, msg: "There was an error reading/creating the upload folder" })
    }
    let myUploadedFiles = [];
    form.on('file', file => {
        myUploadedFiles.push(file)
    })
    console.log(myUploadedFiles)

    form.parse(req, async (err, fields, files) => {
        let myUploadedFiles = [];
        if (err) {
            console.log("Error parsing the file");
            return res.json({ ok: false, msg: "Error Parsing the files" })
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

module.exports = router