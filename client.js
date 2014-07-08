var jwt = require('jsonwebtoken')
  , fs = require('fs')
  , request = require('request')
  , config = require('./config.json');

if(!config) {
  console.error('Failed to load config');
  process.exit(1);
}

var cert = fs.readFileSync(config.cert);

request.post(config.provider, function (err, response, body) {
	var data = JSON.parse(body);
  console.log(data.token);
  if (err && response.statusCode != 200) {
  	console.error(err);
    process.exit(1);
  }

  jwt.verify(data.token, cert, function(err, decoded) {
  	if (err) {
  	  console.error(err);
      process.exit(1);
  	}
  	console.log(decoded);
  });
});

