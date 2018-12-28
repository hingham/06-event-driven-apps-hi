'use strict';
const fs = require('fs');
const events = require('./events.js');

function readFile(file){
  return new Promise( (resolve, reject) => {
    fs.readFile( file, (err, data) =>{
      if(err) {events.emit('error', {file: file}); }
      resolve(data);
    });
  });
}

function writeFunction(file, text){
  fs.writeFile(file, Buffer.from(text), (err, data) =>{
    if(err) { events.emit('error', {file: file}); }
    events.emit('saved', {file: file});
  });
}

module.exports ={ readFile, writeFunction};