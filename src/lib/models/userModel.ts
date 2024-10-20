import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNo: {
    type: String,
    required: true,
  },
  avatar: {
    public_id: String,

    url: String,
  },
  role: {
    type: String,
    default: "User",
  },
  accountStatus: { type: String, default: "Pending" },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const User = models.User || model("User", userSchema);
