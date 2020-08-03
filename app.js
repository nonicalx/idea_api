const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const ideasRoute = require('./routes/ideas')


require('dotenv').config();


const app = express();
const port = process.env.PORT || 5000;
const mongoURI = process.env.connectionURI


app.use(cors());
app.use(express.json());
app.use('/ideas', ideasRoute)

mongoose.connect(mongoURI,{useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true})

const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log("DB connected successfully");
})

app.listen(port, ()=>{
    console.log(`Server is live on http://localhost:${port}`)
})






mongoose.connection