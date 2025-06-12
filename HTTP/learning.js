// =======================================
// server.js
// A basic HTTP server using Express.js
//
// Requirements:
// 1. Install Node.js from https://nodejs.org/
// 2. Then install Express: npm install express
// 3. To run this server: node server.js
// 4. Recommended: Use nodemon for auto-reload: npm install -g nodemon
//    Run with: nodemon server.js
//
// Access the server at: http://localhost:3000
// =======================================

// Step 1: Import the express module
const express = require("express");

// Step 2: Create an instance of the Express app
const app = express();

// ==========================
// Middleware (Middle-level ka guard 🚦)
// ==========================
// Middleware is a function that has access to req, res, and next
// Use it for logging, validation, authentication, etc.

app.use((req, res, next) => {
  console.log(`${req.method} request made to ${req.url}`);
  next(); // Move to the next middleware/route handler
});

// You can create multiple middlewares
// app.use((req, res, next) => {
//   console.log("Another middleware executed.");
//   next();
// });

// ==========================
// Routes
// ==========================

app.get("/", (req, res) => {
  res.send("Hello, World! 👋");
  console.log("Root route accessed");
});

app.get("/about", (req, res) => {
  res.send("Yeh About Page hai ");
  console.log("About route accessed");
});

// Simulating an error in /profile route
app.get("/profile", (req, res, next) => {
  return next(new Error("Profile route not implemented yet! ❌"));
});

// ==========================
// Error Handling Middleware
// ==========================
// Yeh sabse last mein hona chahiye
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke! 😵");
});

// ==========================
// Start the server
// ==========================
app.listen(3000, () => {
  console.log("🚀 Server is running on http://localhost:3000");
});
