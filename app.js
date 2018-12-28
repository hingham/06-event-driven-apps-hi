'use strict';

const fs = require('fs');
const events = require('./event-modules/events.js');
const logger = require('./event-modules/logger.js');
const readWrite = require('./event-modules/read-write.js');

let myFile = process.argv.slice(2).shift(); //give the file name
console.log(myFile);


readWrite.readFile(myFile).then( (text) =>{
  return text.toString().toUpperCase();
}).then( (text) =>{
  readWrite.writeFunction(myFile, text);
}); 






