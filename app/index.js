var train = require('express-train');

console.log("DIRNAME index.js - ", __dirname);

module.exports = train(__dirname);