// app.js
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const cors = require('cors');
const expressMongoSanitize = require('express-mongo-sanitize');
const expressRateLimit = require('express-rate-limit');
const helmet = require('helmet');
const hpp = require('hpp');
const validator = require('validator');

const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(multer().any());
app.use(cors());
app.use(expressMongoSanitize());
app.use(expressRateLimit());
app.use(helmet());
app.use(hpp());

// Router
const apiRouter = require('./src/Routes/api');
app.use('/api', apiRouter);

// 404 Route
app.use((req, res) => {
  res.status(404).json({ status: 'error', message: 'Not Found' });
});

module.exports = app;
