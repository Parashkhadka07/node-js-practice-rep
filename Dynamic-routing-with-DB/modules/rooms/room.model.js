const { Schema, model } = require("mongoose");

const roomSchema = new Schema(
  {
    Number: { type: Number, required: true, unique: true },
    isFilled: { type: Boolean, default: false },
    ispetAllowed: { type: Boolean, default: false },
    type: { type: String, enum: ["single", "Double"], default: "single" },
  },
  { timestamps: true }
);

module.exports = new model("Room", roomSchema);
