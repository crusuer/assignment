const express = require('express');
const app = express();
let port = process.env.PORT || 3000;

//import body parser
let bodyParser = require('body-parser');
//import mongoose
let mongoose = require('mongoose');
//Import routes
let apiRoutes = require("./routes/routes");

//Use API routes in the App
app.use('/api', apiRoutes)

//configure bodyparser to hande the post requests
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

//connect to mongoose
const dbPath = 'mongodb+srv://challengeUser:WUMglwNBaydH8Yvu@challenge-xzwqd.mongodb.net/getir-case-study?retryWrites=true';
const options = {useNewUrlParser: true, useUnifiedTopology: true}
const mongo = mongoose.connect(dbPath, options);
mongo.then(() => {
    console.log('Connected to MongoDB');
}, error => {
    console.log(error, 'Error while conneting to MongoDB');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})