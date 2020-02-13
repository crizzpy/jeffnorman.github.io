//Server
const express = require("express");
const app = express();

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
app.use(express.urlencoded({extended: true}))

//Dashboard Router
app.use('/?/users', require('./routes/users'))

//connect to DB
mongoose.connect(DB, {useNewUrlParser: true})
.then(() => console.log('Connected to DB'))
.catch(err => console.log(err))


//Socket connection
// io.on('connect', socket => {
//     console.log('socket connected')
// })



const PORT = process.env.PORT || 3000
app.listen(PORT, console.log(`Server running on port ${PORT}`))