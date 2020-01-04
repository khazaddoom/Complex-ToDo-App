const User = require('../models/user.model')
exports.home = function(request, response) {
    if(request.session.user) {
        response.render('home-dashboard'); 
    } else {
        response.render('home-guest');        
    }
    
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
        const result = await user.login();
        request.session.user = {
            username: user.data.username
        }
        response.send(result)
    } catch (error) {
        response.send(error)
    }
}