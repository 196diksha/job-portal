const User = require("../models/User");
const bcrypt = require("bcryptjs");

// Register user
exports.registerUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ msg: "User already exists" });

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role,
    });

    await newUser.save();
    res.status(201).json({
  msg: "User registered successfully",
  user: {
    id: savedUser._id,
    name: savedUser.name,
    email: savedUser.email,
    role: savedUser.role
  }
});
  } catch (error) {
    res.status(500).json({ msg: "Server error", error: error.message });
  }
};

// Login user
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

    res.json({ msg: "Login successful", user });
  } catch (error) {
    res.status(500).json({ msg: "Server error", error: error.message });
  }
};
