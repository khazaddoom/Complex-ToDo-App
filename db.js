const mongodb = require('mongodb');
const dotenv = require('dotenv');

dotenv.config();

const connectionString = process.env.CONNECTION_STRING;

mongodb.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true }, function(error, client) {

    module.exports = client;

    const app = require('./app');

    app.listen(process.env.PORT, function() {
        console.log(`Server listening on Port ${process.env.PORT}...`)
    })

});