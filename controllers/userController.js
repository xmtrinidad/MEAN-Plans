const bcrypt = require('bcryptjs');
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
