const events = require('./events.js');


events.on('error', onError);

events.on('saved', fileSaved);

function fileSaved(payLoad){
  console.log('file saved');
  console.log({payLoad});
}

function onError(payLoad){
  console.error('file error');
  console.log({payLoad});
}

module.exports = {fileSaved, onError};

