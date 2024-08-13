const { Schema, model } = require("mongoose"); //destructure instead of const mongoose=require("mongoose"); and mongoose.schema

const userschema = new Schema(
  {
    name: { type: String, required: true },
    age: { type: Number },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    sex: { type: String },
    isActive: { type: Boolean, required: true, default: false },
    role: { type: [String], enum: ["admin", "user"], default: ["user"] },
  },
  { timestamps: true }
);
module.exports = new model("User", userschema);
