const express = require('express');
const router = express.Router();
const UserController = require('./Controllers/UserController');
const InsertUserRequest = require('./Request/InsertCreateRequest');

router.get('/', UserController.baseRoute);

router.get('/api/getUsers', UserController.getUsers)

router.post('/api/insertUser', InsertUserRequest.validate('insertUser'), UserController.insertUser)

module.exports = router;