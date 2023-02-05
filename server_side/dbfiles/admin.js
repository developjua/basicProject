const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const adminSchema = new Schema({
  email: { type: String, required: true, unique: true ,trim:true,lowercase:true},
  password: { type: String, required: true }
});

const Admin = mongoose.model('Admin', adminSchema);

// Save the pre-admin email and password to the database
const preAdmin = new Admin({
  email: process.env.EMAIL,
  password: process.env.PASSWORD,
});



module.exports = Admin;

