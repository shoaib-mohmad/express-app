var {getUsers, findUser} = require('./../models/user.model.js');

module.exports = {
    getUsersRequest: (req, res) => {
        getUsers(req, res);
    },
    findUserRequest: (req, res) => {
        findUser(req, res);
    }
}