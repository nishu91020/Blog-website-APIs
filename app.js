const express = require('express');
const app = express();
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const path = require('path');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // form data parser
app.use(cookieParser()); //parse cookies
app.use(express.static(path.join(__dirname, 'public'))); //set static path

app.get('/api/v1', indexRouter);
app.listen(3000, err => {
    console.log('app listining on port 3000');
});
