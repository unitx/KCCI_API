const express = require("express");
const router = express.Router();
const controller = require("../controllers/index");
const CheckAuth = require("../midleware/validate-auth");

router.delete("/", (req, res) => {
  switch (req.query.FormName) {
    case "Roles": controller.Roles.delete(req, res); break;
    case "Users": controller.Users.delete(req, res); break;
    case "Company": controller.Company.delete(req, res); break;
    case "Members": controller.Members.delete(req, res); break;
    case "AttachDocList": controller.AttachDocList.delete(req, res); break;
    case "BusinessCategories": controller.BusinessCategories.delete(req, res); break;
    case "BusinessSubCategories": controller.BusinessSubCategories.delete(req, res); break;
    case "BusinessTypes": controller.BusinessTypes.delete(req, res); break;
    case "CountryList": controller.CountryList.delete(req, res); break;
    case "ReceiptType": controller.ReceiptType.delete(req, res); break;
    case "PaymentMethod": controller.PaymentMethod.delete(req, res); break;
    case "Bank": controller.Bank.delete(req, res); break;
    case "BankBranches": controller.BankBranches.delete(req, res); break;
    case "Receipts": controller.Receipts.delete(req, res); break;
    default: break;
  }
});

module.exports = router;
