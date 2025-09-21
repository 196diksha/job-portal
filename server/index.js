const express = require("express");
const app = express();
const PORT = 5000; // backend will run on port 5000

// Middleware (helps to parse JSON requests)
app.use(express.json());

// Example route
app.get("/", (req, res) => {
  res.send("Hello from Express Backend 🚀");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
