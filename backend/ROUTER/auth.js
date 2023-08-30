const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const bcrypt = require("bcryptjs");
const Authenticate = require("../MIDDLEWARE/Authentication");
const multer = require("multer");
const gallery = require("../MODEL/gallerySchema");
const product = require("../MODEL/addProductSchema");
require("../DB/connect");

const userModel = require("../MODEL/signupSchema");
const ErrorHander = require("../utils/errorhandler");

router.get("/", (req, res) => {
  res.send(`hello with Router`);
});

// Signup Post API

router.post("/signup", async (req, res) => {
  const { name, mob, email, pass, cpass } = req.body;
  if (!name || !mob || !email || !pass || !cpass) {
    return res.status(422).json({ error: "Please fill all feilds" });
  }

  try {
    const useExist = await userModel.findOne({ email: email });
    if (useExist) {
      return res.status(422).json({ error: "Email already exist" });
    } else if (pass != cpass) {
      return res.status(422).json({ error: "Password doesn't match" });
    }

    const user = new userModel({ name, mob, email, pass, cpass });
    const userregister = await user.save();

    console.log(user);
    if (userregister) {
      res.status(201).json({ message: "user registered successfully" });
    }
  } catch (err) {
    console.log(err);
  }
});

// Login Post API

router.post("/login", async (req, res, next) => {
  // console.log(req.body);
  // res.json({massage:req.body});
  try {
    const { email, pass } = req.body;
    if (!email || !pass) {
      // return res.status(400).json({error:"plz filled  the data"}) changed with errorHander
      return next(new ErrorHander("Not Logged in ", 404));
    }

    const userLogin = await userModel.findOne({ email: email });
    console.log(userLogin);
    if (userLogin) {
      const isMatch = await bcrypt.compare(pass, userLogin.pass);

      const token = await userLogin.generateAuthToken();
      console.log(token);
      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });
      if (!isMatch) {
        res.json({ error: "invalid credentials" });
      } else {
        res.json({ message: "user signin successfully" });
      }
    } else {
      res.json({ error: "invalid credentials" });
    }
  } catch (err) {
    // console.log(err);
    return next(new ErrorHander("Not Logged in ", 404));
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
router.route("/addProduct").post(upload.single("photo"), (req, res) => {
  const name = req.body.name;
  const prod = req.body.prod;
  const desc = req.body.desc;
  const price = req.body.price;
  const photo = req.file.filename;

  const newUserData = {
    name,
    desc,
    price,
    photo,
    prod,
  };

  const user = new product(newUserData);
  user
    .save()
    .then(() => res.json("user Added"))
    .catch((err) => res.status(400).json("Error:" + err));
});

// get View add Product API/////////////////////////////////////////////////////////////////////////////
router.get("/getProData", async (req, res) => {
  try {
    const view = await product.find();
    res.status(201).json({ status: 201, view });
  } catch (error) {
    res.status(401).json({ status: 401, error });
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

module.exports = router;
