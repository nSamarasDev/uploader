const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require('./database');
require('./database')();
const PORT = process.env.PORT || 8080;
const app = express();
//connectDB();

//app.use(multer({ dest: './uploads/' }));

app.use(cors());
app.use(bodyParser.json());

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
