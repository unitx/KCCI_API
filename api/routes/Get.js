const express = require("express");
const router = express.Router();
const controller = require("../controllers/index");
const CheckAuth = require("../midleware/validate-auth");

router.get("/", (req, res) => {
  switch (req.query.FormName) {
    case "Roles": controller.Roles.getOne(req, res); break;
    case "Users": controller.Users.getOne(req, res); break;
    case "Company": controller.Company.getOne(req, res); break;
    case "Members": controller.Members.getOne(req, res); break;
    case "AttachDocList": controller.AttachDocList.getOne(req, res); break;
    case "BusinessCategories": controller.BusinessCategories.getOne(req, res); break;
    case "BusinessSubCategories": controller.BusinessSubCategories.getOne(req, res); break;
    case "BusinessTypes": controller.BusinessTypes.getOne(req, res); break;
    case "CountryList": controller.CountryList.getOne(req, res); break;
    case "ReceiptType": controller.ReceiptType.getOne(req, res); break;
    case "PaymentMethod": controller.PaymentMethod.getOne(req, res); break;
    case "Bank": controller.Bank.getOne(req, res); break;
    case "BankBranches": controller.BankBranches.getOne(req, res); break;
    case "Receipts": controller.Receipts.getOne(req, res); break;
    default: break;
  }
});

module.exports = router;
