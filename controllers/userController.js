const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

exports.user_register = (req, res) => {
   const newUser = new User(req.body);
   bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
         if (err) throw err;
         newUser.password = hash;
          newUser.save((err, registeredUser) => {
              if (err) throw err;
              res.json(registeredUser);
          });
      });
   });
};

exports.user_login = (req, res) => {
    User.findOne({email: req.body.email}, (err, user) => {
        if (err) throw err;
        // No user found
        if (!user) {
            return res.send({success: false, msg: 'User not found'});
        }
        // User found, check password
        bcrypt.compare(req.body.password, user.password, (err, isMatch) => {
            if (err) throw err;
            // Password matches
            if (isMatch) {
                const token = jwt.sign({user}, 'mysecret', {
                    expiresIn: '604800'
                });
                // JSON response with token
                res.json({
                    success: true,
                    token: `Bearer ${token}`,
                    user
                });
            } else {
                // Wrong credentials
                return res.json({success: false, msg: 'Wrong credentials'});
            }
        });
    });
};
