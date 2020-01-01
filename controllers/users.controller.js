
const User = require('../models/user.model')
exports.home = function(request, response) {
    response.render('home-guest');
}

exports.register = function(request, response) {
    let user = new User(request.body);
    user.register();
    response.send('Thank you for registering with us');
}