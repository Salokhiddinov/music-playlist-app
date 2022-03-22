const mongoose = require('mongoose');

const connectDB = async () =>{
    try{
        const con = await mongoose.connect(process.env.MONGO_URL);

        console.log(`MongoDB is successfuly connected: ${con.connection.host}`)
    }
    catch(err){2
        console.log(err);
        process.exit(1);
    }
}
module.exports = connectDB