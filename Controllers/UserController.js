const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Users = mongoose.model('users');
const { validationResult } = require('express-validator');

/*
* Route Mapping
* */
//  "/"
exports.baseRoute = async (req, res) => {
    res.send('Server Running');
}

//"/api/getUsers"
exports.getUsers = async (req, res) => {
    const users = await Users.find();
    res.json(users)
}

//"/api/insertUser"
exports.insertUser = async (req, res, next) => {
    try {
        const  errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.status(422).json({ errors: errors.array()})
            return
        }

        await bcrypt.hash(req.body.password, 10, function(err, hash) {
            new Users({
                name: req.body.name,
                email: req.body.email,
                username: req.body.username,
                password: hash
            }).save((err, data) => {
                if (err) {
                    res.status(500).json({
                        status: false,
                        message: "Something went wrong, please try again later"
                    })
                } else {
                    res.status(200).json({
                        "status": true,
                        "message": "User inserted successfully",
                        data
                    })
                }
            })
        });
    } catch (err) {
        return next(err)
    }

}

