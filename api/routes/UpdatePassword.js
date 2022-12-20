const express = require('express');
const router = express.Router();
const controller = require("../controllers/index");

router.post('/', (req, res) => {
    controller.UpdatePassword.update(req, res)
});

module.exports = router;