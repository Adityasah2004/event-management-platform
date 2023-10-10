import asyncHandler from "express-async-handler";

// Add Task
const test = asyncHandler(async (req, res) => {
  try {
    res.send("Hello, Developer's all set you are good to go!");
  } catch (error) {
    // If there is an error, handle it using the asyncHandler middleware
    res.status(500).json({ message: "Failed!!", error: error.message });
  }
});

export { test };
