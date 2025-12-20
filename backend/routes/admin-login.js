const express = require("express");

const router = express.Router();
const { adminLogin } = require("../controller/admin-login");

router.post("/admin-login", adminLogin);

module.exports = router;
