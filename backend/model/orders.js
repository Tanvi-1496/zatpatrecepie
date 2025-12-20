const supabase = require('../config')

const customerOrdersModel = async (
  total,
  filteredProducts,
  address,
  transactionID
) => {
  const { data, error } = await supabase
    .from("orders")
    .insert([
      {
        cust_name: address.name,
        address: address.address,
        number: address.phone,
        pincode: address.pincode,
        transactionID: transactionID,
        order: filteredProducts, 
        amount: total,
      },
    ])
    .select();

  if (error) {
    throw error;
  }

  return data;
};


module.exports = { customerOrdersModel };
