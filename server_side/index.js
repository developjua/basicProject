const express = require('express');
const app = express();
const cors = require('cors')
const router = require('./Useroutes/signup')
const routerlogin = require('./Useroutes/login')
const routerupdate = require('./Useroutes/update_profile')
const routerloginadmin = require('./adminroutes/loginadmin')
const routeralluser = require('./adminroutes/alluser')
require('dotenv').config();
const port = process.env.PORT || 8080


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())
app.use(router);
app.use(routerlogin)
app.use(routerupdate)
app.use(routerloginadmin)
app.use(routeralluser)

app.listen(port,()=> console.log(`server is running at port ${port}`))