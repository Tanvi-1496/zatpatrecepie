const customerOrders = async (req, res) => {
  try {
    const { total, cart, address, transactionID } = req.body;

    console.log(total);
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: e.message,
    });
  }
};

module.exports = { customerOrders };
