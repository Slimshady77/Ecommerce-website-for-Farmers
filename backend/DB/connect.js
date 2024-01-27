const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

const Db = process.env.DATABASE;
console.log(Db);
mongoose
  .connect(Db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connection successful!"))
  .catch((err) => console.log(err));

module.exports = Db;
