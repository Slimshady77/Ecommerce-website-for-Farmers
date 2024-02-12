const ErrorHander = require("../utils/errorhandler");

const roles = {
  admin: "ADMIN",
  support: "SUPPORT",
  franchise: "FRANCHISE",
  storeManager: "STOREMANAGER",
  assistantManger: "ASSISTANTMANAGER",
  user: "USER",
  super: "SUPER",
};

// function ensureAdmin(req, res, next) {
//   try {
//     console.log("ensureAdmin invoked");

//     console.log("User roles:", req.rootUser.role);

//     if (req.rootUser.role == roles.super || req.rootUser.role == roles.admin) {
//       next();
//     } else {
//       throw new ErrorHander(
//         `Role: ${req.rootUser.role} is not allowed to access this resource`,
//         403
//       );
//     }
//   } catch (error) {
//     next(error);
//   }
// }

function ensureAuthentication(req, res, next) {
  try {
    console.log("ensureAuthentication invoked");

    // Check if req.rootUser is defined before accessing its properties
    if (req.rootUser.role === roles.admin) {
      console.log("user role", req.rootUser.role);
    } else {
      // If the 'else' statement is executed, call 'next()' here
      next();
    }
  } catch (error) {
    // Handle the error appropriately
    next(error);
  }
}

module.exports = { ensureAuthentication };
