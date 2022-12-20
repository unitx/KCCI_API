const express = require("express");
const router = express.Router();
const controller = require("../controllers/index");
const CheckAuth = require("../midleware/validate-auth");

// router.get("/", CheckAuth.checkAuth, (req, res) => {
  router.get("/", (req, res) => {
  switch (req.query.FormName) {
    case "Roles": controller.Roles.getList(req, res); break;
    case "Users": controller.Users.getList(req, res); break;
    case "Company": controller.Company.getList(req, res); break;
    case "Members": controller.Members.getList(req, res); break;
    case "AttachDocList": controller.AttachDocList.getList(req, res); break;
    case "BusinessCategories": controller.BusinessCategories.getList(req, res); break;
    case "BusinessSubCategories": controller.BusinessSubCategories.getList(req, res); break;
    case "BusinessTypes": controller.BusinessTypes.getList(req, res); break;
    case "CountryList": controller.CountryList.getList(req, res); break;
    case "ReceiptType": controller.ReceiptType.getList(req, res); break;
    case "PaymentMethod": controller.PaymentMethod.getList(req, res); break;
    case "Bank": controller.Bank.getList(req, res); break;
    case "BankBranches": controller.BankBranches.getList(req, res); break;
    case "Receipts": controller.Receipts.getList(req, res); break;
    default: break;
  }
});

module.exports = router;
