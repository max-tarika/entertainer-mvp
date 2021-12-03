const path = require('path');
const express = require('express');

// Router
const router = require('./routes');

const app = express();

// Set the port to listen on
app.set('port', 3000);

app.use(express.json());
app.use('/', express.static(path.join(__dirname, '..', '..', 'client', 'dist')));

// Set up routes
app.use(router);

app.listen(app.get('port'), () => {
  console.log('Listening on', app.get('port'));
});

module.exports = app;
