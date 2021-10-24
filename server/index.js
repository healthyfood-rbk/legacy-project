require("dotenv").config()
const cors = require("cors")
const express = require("express");
var path = require("path")
// const path = __dirname + '/../dist/';
const app = express();
app.use(cors())
const {PORT} = process.env
var bodyParser = require('body-parser');
var morgan = require('morgan');
var db = require('./db');
var ItemRouter = require('../server/Item/ItemRouter')
var AuthRouter = require('../server/Item/AuthRouter')
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//route
app.use("/", ItemRouter)
app.use("/", AuthRouter)
app.use(express.static("../legay-project/dist/LegacyProject"));
app.get('/', function (req, res) {
});
app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
})

// C:\Users\DELL\Desktop\legacy-project\server

















