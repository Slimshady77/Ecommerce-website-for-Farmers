const jwt = require("jsonwebtoken");
const ErrorHander = require("../utils/errorhandler");
const { userModel } = require("../MODEL/signupSchema");

const Authenticate = async (req, res, next) => {
  try {
    const token = req.cookies.jwtoken;

    if (!token) {
      throw new Error("No token provided");
    }

    const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
    const rootUser = await userModel.findOne({
      _id: verifyToken._id,
      "tokens.token": token,
    });

    if (!rootUser) {
      throw new Error("User not found");
    }

    req.token = token;
    req.rootUser = rootUser;
    req.userID = rootUser._id;

    next();
  } catch (err) {
    next(err);
  }
};

module.exports = Authenticate;
