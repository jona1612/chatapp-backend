const mongoose = require('mongoose');
require('dotenv').config();


// MongoDB Connection
const URL = "mongodb+srv://john:Developer123@cluster0.hsmfp.mongodb.net/ChatApp?retryWrites=true&w=majority";

mongoose.connect(URL).then((res) => console.log("mongoDB is connected")).catch((err) => console.log(err))
