const express = require('express');
const app = express();

app.use( '/', require('./usuario') );
app.use( '/proyecto', require('./proyecto') );
 app.use( '/conjunto', require('./conjunto') );

module.exports = app;