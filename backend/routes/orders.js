
const express = require("express");


const router = express.Router()
const {customerOrders,getAllOrders, setStatus, getOrder} = require( "../controller/orders" )

const adminAuth = require("../middleware/middleware");

router.post("/orders", adminAuth, customerOrders)
router.get("/get-orders", adminAuth, getAllOrders);
router.get("/get-order/:id", adminAuth, getOrder);
router.post("/update-status", adminAuth, setStatus);

module.exports = router