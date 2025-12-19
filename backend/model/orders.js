const db = require("../DB/connect");

const customerOrdersModel = async (
  total,
  filteredProducts,
  address,
  transactionID
) => {
  const query = `
    INSERT INTO song_order
    (cust_name, address, number, pincode, transactionID, orders, amount)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

  const [rows] = await db.execute(query, [
    address.name,
    address.address,
    address.phone,
    address.pincode,
    transactionID,
    JSON.stringify(filteredProducts), // store as JSON
    total,
  ]);

  return rows;
};

module.exports = { customerOrdersModel };
