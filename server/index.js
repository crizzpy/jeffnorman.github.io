//Server
const express = require("express");
const app = express();

//Form/upload libraries
const Formidable = require('formidable')
const bluebird = require('bluebird')
const fs = bluebird.promisifyAll(require('fs'))

//Web sockets
// const http = require("http");
// const server = http.createServer(app);
// const socketio = require("socket.io");
// const io = socketio(server);

const cors = require("cors");


//Database
const mongoose = require("mongoose");
const DB = require('./config/keys').MongoURI

//CORS, body-parser
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//API Routers
app.use('/users', require('./routes/users'))
app.use('/posts', require('./routes/posts'))
app.use("/api", require("./routes/api"));
app.use('/messages', require('./routes/messages'))
app.use('/images', require('./routes/images'))

//connect to DB
mongoose.connect(DB, {useNewUrlParser: true})
.then(() => console.log('Connected to DB'))
.catch(err => console.log(err))




//Socket connection
// io.on('connect', socket => {
//     console.log('socket connected')
// })



const PORT = process.env.PORT || 4000
app.listen(PORT, console.log(`Server running on port ${PORT}`))