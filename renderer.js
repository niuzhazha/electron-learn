// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const Api = require('./config/api.js')
const request = require('request');
request(`${Api.host}${Api.home_schools}`, function(error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', JSON.stringify(response)); // Print the response status code if a response was received
  console.log('body:', JSON.stringify(body)); // Print the HTML for the Google homepage.

  // const 
});