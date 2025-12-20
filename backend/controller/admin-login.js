// adminController.js
const bcrypt = require("bcrypt");
const supabase = require('../config')

const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Validation
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    // 2. Fetch admin
    const { data: admin, error } = await supabase
      .from("admin_details")
      .select("*")
      .eq("email", email)
      .single();

    if (error || !admin) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    // 3. Compare password
    const isPasswordMatch = await bcrypt.compare(password, admin.password);

    if (!isPasswordMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    // 4. Login success (no token)
    return res.status(200).json({
      success: true,
      message: "Admin login successful",
      admin: {
        id: admin.id,
        email: admin.email,
      },
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: e.message,
    });
  }
};

module.exports = { adminLogin };
