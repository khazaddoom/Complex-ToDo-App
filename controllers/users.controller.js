
exports.home = function(request, response) {
    response.render('home-guest');
}

exports.register = function(request, response) {
    response.send('Thank you for registering with us');
}