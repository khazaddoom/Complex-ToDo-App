const usersCollection = require('../db').collection('users');
const validator = require('validator');


let User = function(data) {
    this.data = data;
    this.errors = [];
};

User.prototype.cleanup = function() {

    this.data = {
        username: this.data.username.trim(),
        email: this.data.email.trim(),
        password: this.data.password
    }

    if(typeof(this.data.username) != 'string') { this.data.username = '';}
    if(typeof(this.data.email) != 'string') { this.data.email = '';}
    if(typeof(this.data.password) != 'string') { this.data.password = '';}
}

User.prototype.validate = function() {
    if(this.data.username == '') this.errors.push('Username is a Required Field.');
    if(this.data.username != '' && !validator.isAlphanumeric(this.data.username)) this.errors.push('Username can only contain characters or numbers.')
    if(!validator.isEmail(this.data.email)) this.errors.push('Enter a valid Email Address.');
    if(this.data.password == '') this.errors.push('Password is a Required Field.');
}

User.prototype.register = function() {
    // cleanup
    this.cleanup();
    // validate
    this.validate();    

    if(!(this.errors.length > 0)) {
        usersCollection.insertOne(this.data);
    }

};

module.exports = User;