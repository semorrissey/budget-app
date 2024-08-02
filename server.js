const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the Angular app
app.use(express.static(path.join(__dirname, 'dist', 'budget-app')));

// Handle all other routes by returning the Angular app's index.html file
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'budget-app', 'index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
