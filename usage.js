var uploadcare = require('../lib/main')('public_key', 'private_key');

function handler(error, response) {
  if(error) {
    console.log('Error: ' + JSON.stringify(response));
  } else {
    console.log('Response: ' + JSON.stringify(response));
  }
}

uploadcare.files.info('file_id', handler);
uploadcare.files.keep('file_id', handler);
uploadcare.files.remove('file_id', handler);
