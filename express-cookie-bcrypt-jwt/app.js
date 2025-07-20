// 📚 Topic: How to Set/Read Cookies + bcrypt + JWT Integration

// 🧰 Required Packages
const express = require("express");
const cookieParser = require("cookie-parser"); // For reading cookies
const bcrypt = require("bcrypt");              // For hashing & comparing passwords
const jwt = require("jsonwebtoken");           // For creating/verifying JWT tokens

const app = express();

// 🧠 Middleware to use cookie-parser
app.use(cookieParser());

/* 
===============================
🍪 COOKIE SECTION
===============================
*/

// ✅ Set a simple cookie
app.get("/setCookie", function (req, res) {
  res.cookie("name", "Owais"); // Cookie created
  res.send("✅ Cookie 'name=Owais' set successfully.");
});

// ✅ Read all cookies (including name, token, etc.)
app.get("/readCookie", function (req, res) {
  console.log(req.cookies); // All cookies visible in console
  res.send("🔍 All cookies logged in console.");
});

/* 
===============================
🔐 BCRYPT SECTION
===============================
*/

// ✅ Generate a hashed password using bcrypt
app.get("/hash", function (req, res) {
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash("Owais", salt, function (err, hash) {
      console.log("🔒 Hashed password:", hash);
      res.send("✅ Password hashed. Check console.");
    });
  });
});

// ✅ Compare original value with hashed password
app.get("/compare", function (req, res) {
  const original = "Owais";
  const hashedValue = "$2b$10$DilSanjYfu/YIq4PjNojIesn.FGiazmgE9wTXxveSagVMKsWDXekW";

  bcrypt.compare(original, hashedValue, function (err, result) {
    if (result) {
      res.send("✅ Password match (True)");
    } else {
      res.send("❌ Password does not match (False)");
    }
  });
});

/* 
===============================
🔐 JWT SECTION
===============================
*/

// ✅ Create JWT token and set it in cookie
app.get("/setToken", function (req, res) {
  const token = jwt.sign({ email: "owais@example.com" }, "secret"); // Secret should be strong & stored in env
  res.cookie("token", token); // JWT stored in cookie
  res.send("🔐 JWT Token created & set in cookie.");
});

// ✅ Read & verify JWT token from cookie
app.get("/readCookie/token", function (req, res) {
  try {
    const decoded = jwt.verify(req.cookies.token, "secret");
    console.log("🔍 Verified Token Payload:", decoded);
    res.send("✅ JWT token verified. Check console.");
  } catch (err) {
    res.status(401).send("❌ Invalid or expired token.");
  }
});

/* 
===============================
🌐 DEFAULT ROUTE
===============================
*/

// ✅ Default route
app.get("/", function (req, res) {
  res.send("🚀 Server is up and running!");
});

// 📢 Start Server
app.listen(3000, () => {
  console.log("✅ Server is running on http://localhost:3000");
});
