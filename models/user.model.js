let User = function(data) {
    this.data = data;
    this.errors = [];
};

User.prototype.validate = function() {
    if(this.data.username == '') this.errors.push('Username is a Required Field!');
    if(this.data.email == '') this.errors.push('Email Address is a Required Field!');
    if(this.data.password == '') this.errors.push('Password is a Required Field!');
}

User.prototype.register = function() {
    // validate
    this.validate();
};

module.exports = User;