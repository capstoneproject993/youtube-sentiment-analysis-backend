// controllers/authController.js
const User = require('../models/User'); // Import the User model

const registerUser = async (email) => {
  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      const newUser = new User({ email });
      await newUser.save();
      console.log("User registered and saved in database:", newUser);
    } else {
      console.log("User already exists in the database");
    }
  } catch (error) {
    console.error("Error saving user to database:", error);
    throw new Error("Database error");
  }
};

module.exports = { registerUser };
