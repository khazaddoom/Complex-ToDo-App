const express = require('express');
const app = express();

app.get('/', function(request, response) {
    response.send('<h1>Initial Attempt</h1>')
})

app.listen(3000, function() {
    console.log('Server listening on Port 3000...')
})