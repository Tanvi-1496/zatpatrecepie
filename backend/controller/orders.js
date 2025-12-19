const { customerOrdersModel } = require("../model/orders");

const customerOrders = async (req, res) => {
  try {
    const { total, filteredProducts, address, transactionID } = req.body;

    console.log(total,filteredProducts, address, transactionID);

    const response = await customerOrdersModel(total , filteredProducts, address, transactionID)

    if(response)
    {
      return res.status(201).json({
        success: true,
        message: "Data uploaded successfully"
      })
    }

  } catch (e) {
    return res.status(500).json({
      success: false,
      message: e.message,
    });
  }
};

module.exports = { customerOrders };
