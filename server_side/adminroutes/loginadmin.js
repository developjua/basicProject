const express = require('express');
const routerloginadmin = express.Router();

const Admin = require('../dbfiles/admin');

routerloginadmin.post('/admin/login', async (req, res) => {
  const { email,password } = req.body;
  const success = true;

  try {
    const user = await Admin.findOne({ email });
    
    if (!user) return res.status(400).send({ error: 'Email or password is not correct' });
    console.log(user)
   
    if(password !== user.password){
      return res.status(400).send({ error: 'Invalid password' });
    }
    return res.status(201).json({ success });
  } catch (error) {
    return res.status(500).send({ error: 'Server error' });
  }
});

module.exports = routerloginadmin;
