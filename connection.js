const mongoose = require('mongoose');
require('dotenv').config();

// mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.s11qz.mongodb.net/chatAppMern?retryWrites=true&w=majority`, ()=> {
//   console.log('connected to mongodb')
// })

// MongoDB Connection
const URL = "mongodb+srv://john:Developer123@cluster0.hsmfp.mongodb.net/ChatApp?retryWrites=true&w=majority";

mongoose.connect(URL).then((res) => console.log("mongoDB is connected")).catch((err) => console.log(err))
