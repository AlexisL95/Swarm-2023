const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

var router = express.Router();
const app = express();

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb' }));
app.use(morgan('dev'));
app.use(cors());
app.use(express.static('public'));

const test = require('./routes/test.routes.js');
router.use('/test', test);

app.use('/api', router);

module.exports = app;
