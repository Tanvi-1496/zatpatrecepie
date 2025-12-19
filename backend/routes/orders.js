
const express = require("express");


const router = express.Router()
const {customerOrders} = require("../controller/orders")

router.post("/orders", customerOrders)

module.exports = router