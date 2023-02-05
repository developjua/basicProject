const express = require('express');
const multer = require('multer');
const fs = require('fs')

const User = require('../dbfiles/user');

const routerupdate = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({ storage, fileFilter });

routerupdate.post('/user',upload.single('picture'), async (req, res) => {
  const { username, password, email } = req.body;
  console.log(req.body)
  const picture = {
    data: req.file.buffer,
    contentType: req.file.mimetype
  }
  const success = true;
  const user = await User.findOne({ email });
  
  if (!user) {
    return res.status(400).json({ error: 'User not found' });
  }
  user.username = username
  user.password = password;
  user.picture =  picture;
  
  try {
    await user.save();
    res.status(200).json({ message: 'Profile updated successfully',user ,success });
  } catch (error) {
    res.status(500).json({ error: 'Error updating profile' });
  }
});

module.exports = routerupdate;
