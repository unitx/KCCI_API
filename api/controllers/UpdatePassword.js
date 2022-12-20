const db = require("../models/index");
const ResponseLog = require("../../core/ResponseLog");
const Decrypter = require("../../core/decrypt");
const AppConfig = require("../../AppConfig");

exports.update = async (req, res) => {
  try {
    const UserId = req.body.UserID;
    let user = await db.Users.findOne({ where: { UserID: UserId } })
    if (user && authenticatePassword(user.Password, req.body.OldPassword)) {
      await db.Users.update({Password : req.body.NewPassword}, { where: { UserID: UserId } });
      ResponseLog.Send200(req, res,"Password Updated Successfully!");
    }
    else {
      ResponseLog.Error200(req, res, "Invalid Current Password. Please Enter Correct Password");
    }
  } catch (err) {
    ResponseLog.Error200(req, res, err.message);
  }
};

const authenticatePassword = (userPass, reqPass) => {
  const secretKey = AppConfig.SKey;
  const decryptedUserPass = Decrypter.decrypt(userPass, secretKey);
  const decryptedReqPass = Decrypter.decrypt(reqPass, secretKey);
  if (decryptedUserPass === decryptedReqPass) {
    return true;
  }
  // return false;
};


