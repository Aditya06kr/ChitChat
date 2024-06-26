import bcrypt from "bcryptjs";
import mongoose from "mongoose";

const salt = bcrypt.genSaltSync(10);
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  const user = this;
  if (!user.isModified('password')) return next();
  try {
      const hashedPassword = bcrypt.hashSync(user.password, salt);
      user.password = hashedPassword;
      next();
  } catch (err) {
      return next(err);
  }
});

const User = mongoose.model("User", userSchema);

export default User;