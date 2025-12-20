const { customerOrdersModel } = require("../model/orders");
const supabase = require('../config')

const customerOrders = async (req, res) => {
  try {
    const { total, filteredProducts, address, transactionID } = req.body;

    console.log(total, filteredProducts, address, transactionID);

    const response = await customerOrdersModel(
      total,
      filteredProducts,
      address,
      transactionID
    );

    if (response) {
      return res.status(201).json({
        success: true,
        message: "Data uploaded successfully",
      });
    }
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: e.message,
    });
  }
};



const getAllOrders = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("orders")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }

    return res.status(200).json({
      success: true,
      totalOrders: data.length,
      orders: data,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: e.message,
    });
  }
};

module.exports = { getAllOrders, customerOrders };

