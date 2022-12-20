const express = require("express");
const router = express.Router();
const controller = require("../controllers/index");
const CheckAuth = require("../midleware/validate-auth");

router.get("/", (req, res) => {
// router.get("/", CheckAuth.checkAuth, (req, res) => {
  switch (req.query.FormName) {
    case "Menu": controller.LookUp.getMenu(req, res); break;
    case "Roles": controller.LookUp.getRoles(req, res); break;
    case "Members": controller.LookUp.getMembers(req, res); break;
    case "AttachDocList": controller.LookUp.getAttachDocList(req, res); break;
    case "BusinessCategories": controller.LookUp.getBusinessCategories(req, res); break;
    case "BusinessSubCategories": controller.LookUp.getBusinessSubCategories(req, res); break;
    case "BusinessTypes": controller.LookUp.getBusinessTypes(req, res); break;
    case "CountryList": controller.LookUp.getCountryList(req, res); break;
    case "MemberInfo": controller.LookUp.getMemberInfo(req, res); break;
    case "ReceiptType": controller.LookUp.getReceiptType(req, res); break;
    case "PaymentMethod": controller.LookUp.getPaymentMethod(req, res); break;
    case "Bank": controller.LookUp.getBank(req, res); break;
    case "BankBranches": controller.LookUp.getBankBranches(req, res); break;
    case "OpenBill": controller.LookUp.getOpenBill(req, res); break;
    default: break;
  }
});

module.exports = router;
