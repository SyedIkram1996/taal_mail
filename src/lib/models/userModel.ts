import { Document, Model, Schema, model, models } from "mongoose";

export interface IUserSchema extends Document {
  uid: string;
  name: string;
  email: string;
  phoneNo: string;
  avatar: {
    public_id: string;
    url: string;
  };
  role: string;
  verifyCode: string;
  isVerified: boolean;
  createdAt: Date;
}

const userSchema: Schema<IUserSchema> = new Schema({
  uid: { type: String, required: true },
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    match: [
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
      "Please use a valid email",
    ],
  },
  phoneNo: {
    type: String,
    required: [true, "Phone number is required"],
  },
  avatar: {
    public_id: String,
    url: String,
  },
  role: {
    type: String,
    default: "User",
  },
  verifyCode: { type: String, required: true },
  isVerified: { type: Boolean, default: false },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const UserModel =
  (models.User as Model<IUserSchema>) || model("User", userSchema);

export default UserModel;
