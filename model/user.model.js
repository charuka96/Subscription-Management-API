import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    require: [true, "User Name is required "],
    trim: true,
    minLength: 2,
    maxLength: 50,
  },

  email:{
    type: String,
    require: [true, "email is required"],
    unique: true,
    trim: true,
    lowercase: true,
    minLength: 5,
    maxLength: 255,
    match:  [/\S+@\S+\.\S+/, 'Please fill a valid email address']
  },

  password:{
    type: String,
    require: [true, "User Name is required "],
    minLength: 6,

  }
},{timestamp:true});

 const User =mongoose.model( 'User',userSchema);

export default User;