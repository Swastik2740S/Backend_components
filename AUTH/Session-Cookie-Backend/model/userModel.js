const mongoose = require('mongoose');

const user = new mongoose.Schema({ // always use new here 
    username : {
        type : String,
        required : true,
        unique : true
    },

    email : {
        type : String,
        required : true,
        trim : true,
        unique : true
    },

    password : {
        type : String,
        required : true,
        trim : true 
    }
})

module.exports = mongoose.model('User',user); //map the schema to the keyword