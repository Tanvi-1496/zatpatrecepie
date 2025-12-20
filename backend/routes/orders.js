
const express = require("express");


const router = express.Router()
const {customerOrders,getAllOrders} = require( "../controller/orders" )

router.post("/orders", customerOrders)
router.get("/get-orders", getAllOrders);

module.exports = router