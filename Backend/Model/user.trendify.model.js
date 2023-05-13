const { Schema, model } = require("mongoose");

const userTrendifySchema = Schema(
  {
    name: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    age: { type: Number },
    location:{type:String}
  },
  {
    versionKey: false,
  }
);

const UserTrendifyModel = model("trendify_users", userTrendifySchema);

module.exports = { UserTrendifyModel };


/**
 * 
{
  "name": "Disha 2",
  "email": "disha2@gmail.com",
  "password": "disha2@123",
  "username": "Disha 2 Gupta",
  "age": 25,
  "location": "Agra"
} 

 * 
 */