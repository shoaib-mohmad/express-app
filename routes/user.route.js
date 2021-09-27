const express = require('express');
const router = express.Router();

// import the controller methods

var {getUsersRequest, findUserRequest} = require('./../controllers/user.controller.js');

router.get('/', getUsersRequest);
router.get('/user/:id', findUserRequest);

module.exports = router;