const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS
app.use(cors());

// Define API Endpoint
app.get("/", (req, res) => {
  res.json({
    email: "nwankwojoshua100@gmail.com", // Replace with your HNG email
    current_datetime: new Date().toISOString(), // ISO 8601 formatted date
    github_url: "https://github.com/Joshpowerfit/hng-stage0-backend.git", // Replace with your GitHub repo link
  });
});

// Start the Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
