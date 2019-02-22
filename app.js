// Require packages and set the port
const express = require('express');
const port = 3002;
const app = express();
 
app.get('/public', (request, response) => {
    response.send('Collin\'s Hello World Public');
});

app.get('/private', (request, response) => {
    response.send('Collin\'s Hello World Private');
});
 
// Start the server
const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);
 
    console.log(`Server listening on port ${server.address().port}`);
});