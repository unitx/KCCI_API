const express = require("express");
const router = express.Router();
const controller = require("../controllers/index");
const CheckAuth = require("../midleware/validate-auth");

router.post("/", (req, res) => {
  switch (req.body.FormName) {
    case "Roles": controller.Roles.CreateOrUpdate(req, res); break;
    case "Users": controller.Users.CreateOrUpdate(req, res); break;
    case "Company": controller.Company.CreateOrUpdate(req, res); break;
    case "Members": controller.Members.CreateOrUpdate(req, res); break;
    case "AttachDocList": controller.AttachDocList.CreateOrUpdate(req, res); break;
    case "BusinessCategories": controller.BusinessCategories.CreateOrUpdate(req, res); break;
    case "BusinessSubCategories": controller.BusinessSubCategories.CreateOrUpdate(req, res); break;
    case "BusinessTypes": controller.BusinessTypes.CreateOrUpdate(req, res); break;
    case "CountryList": controller.CountryList.CreateOrUpdate(req, res); break;
    case "ReceiptType": controller.ReceiptType.CreateOrUpdate(req, res); break;
    case "PaymentMethod": controller.PaymentMethod.CreateOrUpdate(req, res); break;
    case "Bank": controller.Bank.CreateOrUpdate(req, res); break;
    case "BankBranches": controller.BankBranches.CreateOrUpdate(req, res); break;
    case "Receipts": controller.Receipts.CreateOrUpdate(req, res); break;
    default: break;
  }
});

module.exports = router;
