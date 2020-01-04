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

exports.login = async function(request, response) {

    let user = new User(request.body);
    try {
        response.send(await user.login())
    } catch (error) {
        response.send(error)
    }
}