const express = require('express');
const routerlogin = express.Router();
const bcrypt = require('bcrypt');
const User = require('../dbfiles/user');

routerlogin.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const success = true;
  try {
    const user = await User.findOne({ email });
    
    if (!user) return res.status(400).send({ error: 'Email not correct' });
    console.log(user)
   
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return res.status(400).send({ error: 'Invalid password' });

    return res.status(201).json({ user, success });
  } catch (error) {
    return res.status(500).send({ error: 'Server error' });
  }
});

module.exports = routerlogin;
