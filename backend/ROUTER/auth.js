const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const bcrypt = require("bcryptjs");
const multer = require("multer");
const gallery = require("../MODEL/gallerySchema");
const product = require("../MODEL/addProductSchema");
require("../DB/connect");
const path = require("path");
const { userModel } = require("../MODEL/signupSchema");
const ErrorHander = require("../utils/errorhandler");
const ApiFeatures = require("../utils/apiFeatures");
const addProduct = require("../MODEL/addProductSchema");
const { ensureAdmin } = require("../MODEL/signupSchema");
const { ensureAuthentication } = require("../MIDDLEWARE/Admin");
const Authenticate = require("../MIDDLEWARE/Authentication");
const nodemailer = require("nodemailer");
// Signup Post API

router.post("/signup", async (req, res) => {
  const { name, mob, email, pass, cpass } = req.body;
  if (!name || !mob || !email || !pass || !cpass) {
    return res.status(422).json({ error: "Please fill all fields" });
  }

  try {
    const userExist = await userModel.findOne({ email: email });

    if (userExist) {
      return res.status(422).json({ error: "Email already exists" });
    } else if (pass !== cpass) {
      return res.status(422).json({ error: "Passwords don't match" });
    }

    const user = new userModel({
      name,
      mob,
      email,
      pass,
      cpass,
      avatar: { public_id: "rrr", url: "profilepic" },
    });

    await user.save();
    const userLogin = await userModel.findOne({ email: email });
    console.log(userLogin);
    await userLogin.generateAuthToken();

    console.log(user);

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Login Post API

router.post("/login", async (req, res, next) => {
  try {
    const { email, pass } = req.body;

    if (!email || !pass) {
      return next(new ErrorHander("Email and password are required", 400));
    }

    const userLogin = await userModel.findOne({ email: email });

    if (userLogin) {
      const isMatch = await bcrypt.compare(pass, userLogin.pass);

      if (!isMatch) {
        return next(new ErrorHander("Invalid credentials", 401));
      }

      const token = await userLogin.generateAuthToken();

      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });

      res.status(200).json({ success: true });
    } else {
      return next(new ErrorHander("Invalid credentials", 401));
    }
  } catch (err) {
    console.error(err);
    return next(new ErrorHander("Internal Server Error", 500));
  }
});

// Logout method
router.get("/logout", async (req, res, next) => {
  res.cookie("jwtoken", null, { expires: new Date(), httpOnly: true });
  res.status(200).json({ success: true, message: "Logged out successfully" });
});

// forgot Password
router.post("/forgot-password", async (req, res, next) => {
  try {
    const userEmail = req.body.email;

    const userData = await userModel.findOne({ email: userEmail }).exec();

    if (userData) {
      var token =
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15);
      const newEmail = await userModel.updateOne(
        { email: userEmail },
        { $set: { token: token } }
      );

      const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
          user: "robincyril24@gmail.com",
          pass: "lqrworpwjuyvnacu",
        },
      });

      // Send the password reset mail
      const mailOptions = {
        to: userEmail,
        subject: `Password Reset Request`,
        text: `Click the following link to reset your password: http://localhost:3900/reset-password/${token}`,
        html: `<p>Click the following link to reset your password: <a href="http://localhost:3900/reset-password/${token}">Reset Password</a></p>`,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error("Error sending mail:", error);
          return res
            .status(500)
            .json({ success: false, msg: "Error sending mail" });
        } else {
          console.log("Mail sent:", info);
          res.status(200).json({
            success: true,
            msg: "Reset link has been sent to your email!",
          });
        }
      });
    } else {
      return res.status(404).json({ success: false, msg: "Email not found" });
    }
  } catch (error) {
    res.status(400).json({ success: false, msg: error.message });
  }
});

// Profile GET API
router.get("/Profile", Authenticate, (req, res, next) => {
  // console.log(req.userID);
  if (!req.userID) {
    return next(new Error("Not Logged in")); // You might need to handle errors correctly here
  }
  res.send(req.rootUser);
  // console.log(req.rootUser);
});

// contact GET API

router.get("/getdata", Authenticate, (req, res) => {
  console.log("Hello Robin!");
  res.send(req.rootUser);
});

// get Single Product

router.get("/singleProduct/:id", async (req, res) => {
  try {
    const prduct = await product.findById(req.params.id);

    res.status(200).send({
      success: true,
      message: "Product retrieved successfully.",
      prduct,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error while getting the single product.",
      error,
    });
  }
});

// contact POST API

router.post("/contact", Authenticate, async (req, res) => {
  try {
    const { name, email, mob, message } = req.body;
    if (!name || !email || !mob || !message) {
      console.log("error in contact form");
      return res.json({ error: "Plz filled the contact form" });
    }
    const userContact = await userModel.findOne({ _id: req.userID });
    if (userContact) {
      const usermessage = await userContact.addMessage(
        name,
        email,
        mob,
        message
      );
      await userContact.save();
      res.status(201).json({ message: "user Contact Success" });
    }
  } catch (error) {
    console.log(error);
  }
});

// gallery add photos codes/////
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../frontend/public/UPLOAD/");

    // cb.(null, uuidv4()+'-'+ Date.now() +path.extname(file.orinalname)) // Appending.jpg
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png"];
  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

let upload = multer({ storage, fileFilter });

// Post api for Add gallary///////////////////////////////////////////////////

router.route("/addGallery").post(upload.single("photo"), (req, res) => {
  const name = req.body.name;
  // const birthdate= req.body.birthdate;
  const photo = req.file.filename;

  const newUserData = {
    name,
    // birthdate,
    photo,
  };

  const newUser = new gallery(newUserData);
  newUser
    .save()
    .then(() => res.json("user Added"))
    .catch((err) => res.status(400).json("Error:" + err));
});

// Post api for Add product////////////////////////////////

router.route("/addProduct").post(upload.single("photo"), (req, res, next) => {
  const name = req.body.name;
  const prod = req.body.prod;
  const desc = req.body.desc;
  const price = req.body.price;

  const photo = req.file.filename;
  if (!name || !prod || !desc || !price || !photo) {
    const error = new ErrorHander("Data is required", 400);
    return next(error);
  }
  const newUserData = {
    name,
    prod,
    desc,
    price,
    photo,
  };

  const user = new addProduct(newUserData);
  user
    .save()
    .then(() => res.json("Product Added"))
    .catch((err) => res.status(400).json("Error:" + err));
});

// get View add Product API/////////////////////////////////////////////////////////////////////////////
router.get("/getProData", async (req, res) => {
  const resultPerPage = 10;

  try {
    const productCount = await product.countDocuments();
    const apiFeatures = new ApiFeatures(product.find(), req.query)
      .search()
      .filter()
      .pagination(resultPerPage);
    const view = await apiFeatures.query;
    res.status(201).json({ status: 201, view, productCount, resultPerPage });
  } catch (error) {
    res.status(401).json({ status: 401, error: error.message }); // Assuming you want to send the error message
  }
});

// get View gallery

router.get("/getfiledata", async (req, res) => {
  try {
    const getUser = await gallery.find();
    res.status(201).json({ status: 201, getUser });
  } catch (error) {
    res.status(401).json({ status: 401, error });
  }
});

// get Gallery on frontEnd///////
router.get("/getGallerydata", async (req, res) => {
  try {
    const getUser = await gallery.find();
    res.status(201).json({ status: 201, getUser });
  } catch (error) {
    res.status(401).json({ status: 401, error });
  }
});

// get users on Frontend//////////////////////

router.get("/getUser", async (req, res, next) => {
  try {
    const users = await userModel.find(); // Fetch user data from the database
    res.status(200).json({ status: 200, users });
  } catch (error) {
    // res
    //   .status(500)
    //   .json({ error: "An error occurred while fetching user data" });
    return next(new ErrorHander("Not found ", 404));
  }
});

router.post("/delete", (req, res) => {
  let data = req.body.params;
  userModel
    .findByIdAndDelete(data)
    .then(() => {
      res.status(200).send({ message: "Item successfully deleted!" });
    })
    .catch((error) => {
      console.error("Error deleting item:", error);
      res.status(500).send({ message: "Internal server error" });
    });
});

module.exports = router;
