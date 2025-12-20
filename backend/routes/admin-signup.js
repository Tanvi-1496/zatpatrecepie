const express = require("express");

const router = express.Router();
const { adminSignup } = require("../controller/admin-signup");

router.post("/admin-signup", adminSignup);

module.exports = router;
