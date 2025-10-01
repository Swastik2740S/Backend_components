const mongoose = require('mongoose');
//implemented simple try catch
async function connect() {
    try{
    const connect = await mongoose.connect(process.env.MONGO_URI); //method -> mongoose.connnect(URL);
    console.log("Mongodb connected");
    }
    
    catch(error){
        console.error("Error connecting to mongodb");
        process.exit(1);
    }
}

module.exports = connect;