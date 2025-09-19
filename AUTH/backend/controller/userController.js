const User = require('../model/userModel');
const session = require('express-session');
const bcrypt = require('bcrypt');

//create user function
async function createUser(req,res) {
    const {username,email,password} = req.body; //take the input in the body from the user
    //validation 
    if(!username || !email || !password){ //every field is required if not throes an error
        return res.status(400).json({message : "All the fields are requires"});
    }

    try{
        const finduser = await User.findOne({email}); //check if user already exists if yes throws an error
        if(finduser){
            return res.status(400).json({message : "User exist already"});
        }

        const hashedpass = await bcrypt.hash(password,10); //password is hashed here by using bcrypt
        const create = new User({username,email,password:hashedpass}); //create the user here which we took in the req.body
        create.save();
        return res.status(201).json({message : "User Created succesfully",User : {  //send the created message and show the username and email only
            username : create.username,
            email : create.email
        }});
    }
    catch(error){
        return res.status(500).json({message : "Internal Server Error"});
    }
}

module.exports = {createUser};