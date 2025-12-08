const mongoose = require("mongoose");

async function ConnectDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://shashank:Shashank1234@cluster0.eyllfv3.mongodb.net/?appName=Cluster0"
    );
    console.log("Connected Mongodb");
  } catch (error) {
    console.log("Error Connecting to Mongodbv ", error);
  }
}

module.exports = ConnectDB;
