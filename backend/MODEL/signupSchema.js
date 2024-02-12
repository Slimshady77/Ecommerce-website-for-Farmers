const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const validator = require("validator");
const ErrorHander = require("../utils/errorhandler");
const crypto = require("crypto");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  mob: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [validator.isEmail, "Please enter a valid Email"],
  },
  pass: {
    type: String,
    required: true,
    // select: false,
  },
  cpass: {
    type: String,
    required: true,
  },
  avatar: {
    public_id: {
      type: String,
    },
    url: {
      type: String,
    },
  },
  role: {
    type: String,
    default: "user",
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
  messages: [
    {
      name: {
        type: String,
        required: true,
      },
      mob: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      message: {
        type: String,
        required: true,
      },
    },
  ],
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

// create hash password
userSchema.pre("save", async function (next) {
  if (this.isModified("pass")) {
    this.pass = await bcrypt.hash(this.pass, 10);
  }
  next();
});

// create Authentic token
userSchema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign(
      { _id: this._id, role: this.role },
      process.env.SECRET_KEY,
      { expiresIn: process.env.JWT_EXPIRE }
    );

    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (error) {
    console.log(error);
  }
};

// create ContactUS Page message data
userSchema.methods.addMessage = async function (name, email, mob, message) {
  try {
    this.messages = this.messages.concat({ name, email, mob, message });
    await this.save();
    return this.messages;
  } catch (error) {
    console.log(error);
  }
};



const userModel = mongoose.model("usersignup", userSchema);
module.exports = { userModel };
