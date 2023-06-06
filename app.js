const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors())

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use( require('./routes/index') );


mongoose.connect('mongodb://127.0.0.1:27017/ModelosII',{ useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false })
        .then( () => console.log('mongodb connection up'))
        .catch( error => console.log(`unable to connect to mongodb: ${error.message}`));



app.listen(3005, () => console.log('server started'));

