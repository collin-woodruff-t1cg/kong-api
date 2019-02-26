// Require packages and set the port
const express = require('express');
const port = 8045;
const app = express();
 
app.get('/api/non-auth', (request, response) => {
    response.send('Collin\'s Hello World Public');
});

app.get('/api/auth', (request, response) => {
    response.send('Collin\'s Hello World Private');
});
 
// Start the server
const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);
 
    console.log(`Server is listening on port ${server.address().port}`);
});