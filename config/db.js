const {mongoURI} = require("./keys");
const mongoose = require('mongoose');

module.exports = connectDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("connected to Database");
  }
  catch(err) {
    console.log("connection Failed");
    process.exit(1);

  }
} 
