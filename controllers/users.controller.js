const User = require('../models/user.model')
exports.home = function(request, response) {
    response.render('home-guest');
}

exports.register = function(request, response) {
    let user = new User(request.body);
    user.register();
    if(user.errors.length > 0) {
        response.send(user.errors);
        return;
    }
    response.send('Thank you for registering with us');
}

exports.login = function(request, response) {

    let user = new User(request.body);
    user.login(function(message) {
        response.send(message)
    });
}