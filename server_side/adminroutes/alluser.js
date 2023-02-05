const express = require('express');
const routeralluser = express.Router();
const User = require('../dbfiles/user');




routeralluser.get('/admin/users', (req, res) => {
    const page = req.query.page || 1;
    const limit = 10
    ;
    const skip = (page - 1) * limit;
  
    User.find()
      .skip(skip)
      .limit(limit)
      .exec((error, users) => {
        if (error) {
          return res.send({ error });
        }
        res.send({ users });
      });
  });
  
module.exports = routeralluser
  