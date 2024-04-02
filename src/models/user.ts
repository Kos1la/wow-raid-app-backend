import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  auth0Id: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  region: {
    type: String, // reg,server,fract не уверен что нужны, на будущее оставлю
  },
  server: {
    type: String,
  },
  fraction: {
    type: String,
  },
});

const User = mongoose.model("User", userSchema);
export default User;
