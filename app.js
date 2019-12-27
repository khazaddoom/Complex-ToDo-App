const express = require('express');
const app = express();
const router = require('./router');

app.use(express.static('public'));

app.set('views', 'pages');
app.set('view engine', 'ejs');

app.use('/', router)

app.listen(3000, function() {
    console.log('Server listening on Port 3000...')
})