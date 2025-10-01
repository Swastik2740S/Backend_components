//We will create a login function here and use the  server sessions to store the token into the cookies and 
//We'll also send the user payload to the sessions for any more verification or authentications

const User = require('../model/userModel');
const bcrypt = require('bcrypt');

async function login(req,res) {
    const{email,password} = req.body; //taking the email and password from the body we can test this in the postman/thunderclient
    if(!email || !password) return res.status(400).json({message:"Enter all the fields"});

    try{
        const userexist = await User.findOne({email});
        if(!userexist) return res.status(400).json({message:"User do not exist"});

        const validpass = bcrypt.compare(userexist.password,password);
        if(!validpass) return res.status(400).json({message:"Password is invalid"});

        req.session.user = {
            username : userexist.username,
            email : userexist.email
        }

        return res.status(200).json({message:"Successfull login"});
        
    }
    catch(error){
        console.log(error);
        return res.status(500).json({message : "Internal server error"});
    }
    
}

module.exports = {login};