const express = require("express");
var router = express.Router();

const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");
let app = express();
app.use(cookieParser());
const path = require("path");
dotenv.config({ path: "./config.env" });
require("./DB/connect");
const PORT = process.env.PORT;
app.use(express.json());
app.use(require("./ROUTER/auth")); // this making auth.js functional
const errprMiddleware = require("./MIDDLEWARE/error");
const { ensureAdmin, ensureAuthentication } = require("./MIDDLEWARE/Admin");
app.use(`/UPLOAD`, express.static("../frontend/public/UPLOAD"));

// Midellware for errors
app.use(errprMiddleware);

// Use your custom middleware
// app.use(ensureAuthentication);
// enable cors for all routes
app.use(cors());
app.listen(PORT, () => {
  console.log(`server running on Port no.${PORT}`);
});
