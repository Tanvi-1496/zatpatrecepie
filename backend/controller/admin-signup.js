const supabase = require('../config')
const bcrypt = require('bcrypt')


const adminSignup = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    // Check if admin already exists
    const { data: existingAdmin, error: checkError } = await supabase
      .from("admin_details")
      .select("*")
      .eq("email", email)
      .single();

    if (existingAdmin) {
      return res.status(400).json({
        success: false,
        message: "Admin with this email already exists",
      });
    }

    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Store admin in Supabase
    const { data, error } = await supabase.from("admin_details").insert([
      {
        email,
        password: hashedPassword,
      },
    ]);

    if (error) {
      throw error;
    }

    return res.status(201).json({
      success: true,
      message: "Admin registered successfully",
      data,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: e.message,
    });
  }
};
module.exports = { adminSignup };
