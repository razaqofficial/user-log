const {body} = require('express-validator');

exports.validate = (method) => {
    switch (method) {
        case 'insertUser': {
            return [
                body('name', 'Name field is required').exists(),
                body('username', 'Username field is required').exists(),
                body('email', 'Invalid Email').isEmail(),
                body('password', 'Password field is required').isString()
            ]
        }
    }
}