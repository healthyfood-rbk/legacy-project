const express = require("express");
var path = require("path")
// const path = __dirname + '/../dist/';
const app = express();
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
app.use(express.static("../dist/LegacyProject"));
app.get('/', function (req, res) {
});
const port = 3000
app.listen(port, () => {
  console.log(`server is running on localhost${port}`);
})



















