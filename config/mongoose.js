const mongoose = require('mongoose');

// Define an async function to establish a connection to a MongoDB database cluster.
async function main(){
    await mongoose.connect('mongodb+srv://rkchy23:Rbharti@2310@cluster0.wnkgjxk.mongodb.net/test');
    console.log("connection Successfull !! ");
}

// Call the main() function and catch any errors that occur during the connection attempt.
main().catch(error =>console.log("connection not successfull !!"));
