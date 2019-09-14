//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/<name-of-app>'));
app.get('/*', function(req,res) {
  res.header('Content-Security-Policy', 'default-src \'unsafe-eval\' *; script-src-elem *; style-src \'unsafe-inline\' *; object-src \'self\' *; img-src \'self\' *; media-src \'self\' *; frame-src \'self\' *; font-src \'self\' *; connect-src *;');
  res.sendFile(path.join(__dirname+'/dist/<name-of-app>/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
