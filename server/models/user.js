const mongoose=require("mongoose")
const userSchema = new mongoose.Schema({
  name: String,
  usn:String,
  email: String,
  phone: String,
  branch: String,
  year:String,
  event:String
});

const User = mongoose.model('User', userSchema);
module.exports = User