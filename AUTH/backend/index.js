require('dotenv').config();
const express = require('express');
const session = require('express-session');
const app = express();
const mongoconnect = require('./connection/db');
const user = require('./routes/userRoute');
const login = require('./routes/authRoute');
app.use(express.json()); //to take the form data in the json format

mongoconnect();

app.use(  //using session to pass on the session as a cookie from server side.
    //By using this client will not get any token this is server side-session which is moree secure
  session({
    secret: process.env.session, 
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true, // stops JS from reading it
      secure: false,  // true only if HTTPS
      maxAge: 1000 * 60 * 60, // 1 hour
    },
  })
);

app.use("/api/user",user);
app.use("/api/auth",login);


const PORT = process.env.PORT;

app.listen(PORT,()=>{
    console.log(`App running on the port http://localhost:${PORT}`);
})