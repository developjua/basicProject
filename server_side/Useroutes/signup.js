const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../dbfiles/user');
require('dotenv').config();

const router = express.Router();

router.post('/signup', async (req, res) => {
    console.log(req.body)
  try {
    const { username, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      username: username || 'Not selected',
      email,
      password: hashedPassword
    });

    await user.save();
  
    const success = true;

    res.status(201).json({ success });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
