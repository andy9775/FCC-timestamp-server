var express = require('express');

var app = express();
var buildResponse = require('./ResponseBuilder');

app.get(/^\/[0-9].*/, function(req, res) {
  res.status(200)
    .send(buildResponse(req.path.replace('/', '')));
});

// regular expression source: http://stackoverflow.com/a/7380436/2605221 with modification
app.get(/(January|February|March|April|May|June?|July|August|September|October|November|December)\%(\d\d?).+?%(\d\d\d\d)/, function(req, res) {
  res.status(200)
    .send(buildResponse(undefined, decodeURIComponent(req.path.replace('/', ''))));
});

app.listen(8080, function(err) {
  if (err) {
    console.log('Error occurred starting the server');
    console.log(err);
    process.exit(1);
  }

  console.log('Starting server on port: ', 8080);
});
