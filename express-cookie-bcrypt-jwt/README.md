## 🔐 Express.js App: Cookies, bcrypt, and JWT Demo

This project demonstrates how to use **Cookies**, **bcrypt**, and **JWT (JSON Web Token)** with **Express.js**. It is built for learning and reference purposes.

---

### 📦 Tech Stack

* [Express.js](https://expressjs.com/)
* [cookie-parser](https://www.npmjs.com/package/cookie-parser)
* [bcrypt](https://www.npmjs.com/package/bcrypt)
* [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)

---

### 🚀 Features

* ✅ Set and read cookies
* 🔐 Hash and compare passwords using `bcrypt`
* 🔑 Create and verify JWT tokens
* 📚 Clear code structure with comments for learning

---

### 📁 Project Structure

```
project/
│
├── index.js        # Main Express server
├── package.json    # Node dependencies
└── README.md       # Project documentation
```

---

### 📥 Installation

1. **Clone the repository:**

```bash
[git clone https://github.com/your-username/express-cookies-bcrypt-jwt.git](https://github.com/OwaisZakir/learning-backend.git)
cd express-cookies-bcrypt-jwt
```

2. **Install dependencies:**

```bash
npm install
```

3. **Start the server:**

```bash
node index.js
```

Server will run on:
🌐 [http://localhost:3000](http://localhost:3000)

---

### 🧪 Available Routes

| Route               | Description                                |
| ------------------- | ------------------------------------------ |
| `/`                 | Basic check route                          |
| `/setCookie`        | Sets cookie `name=Owais`                   |
| `/readCookie`       | Logs all cookies to console                |
| `/hash`             | Hashes a static value `"Owais"`            |
| `/compare`          | Compares `"Owais"` with a stored hash      |
| `/setToken`         | Creates a JWT and stores in `token` cookie |
| `/readCookie/token` | Verifies and logs JWT token from cookie    |

---

### 🛠️ Future Improvements

* Use `.env` for JWT secret
* Add user registration & login routes
* Add middleware for protected routes using JWT

---

### 📄 License

This project is for educational purposes. Feel free to fork and use it in your learning journey.
