const express = require("express");
const cors = require("cors");
const { Client } = require("pg");

const app = express();
app.use(cors());
app.use(express.json());

const db = new Client({
  host: "pg-shopme-multitalent-209b.j.aivencloud.com",
  user: "avnadmin",
  port: 24362,
  password: "AVNS_bD8sPah1REtwoNtXfZU",
  database: "defaultdb",
  ssl:{rejectUnauthorized:false }
});

db.connect().then(()=>console.log("DB connected")).catch(console.error);

app.post("/api/signup", async (req, res) => {
  const { first_name, last_name, email, password, address, city } = req.body;
  try {
    await db.query(
      "INSERT INTO profiles (first_name, last_name, email, password, address, city) VALUES ($1, $2, $3, $4, $5, $6)",
      [first_name, last_name, email, password, address, city]
    );
    res.json({ success: true, message: "Signup successful" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Database error: " + err.message });
  }
});

app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const result = await db.query(
      "SELECT * FROM profiles WHERE email = $1 AND password = $2",
      [email, password]
    );
    if(result.rows.length > 0) {
      res.json({ success: true, message: "Login successful" });
    } else {
      res.status(401).json({ success: false, message: "Invalid credentials" });
    }
  } catch(err) {
    res.status(500).json({ success: false, message: "Database error" });
  }
});

app.post("/api/alogin", async (req, res) => {
  const { email, password } = req.body;
  try {
    const result = await db.query(
      "SELECT * FROM admin WHERE email = $1 AND password = $2",
      [email, password]
    );
    if(result.rows.length > 0) {
      res.json({ success: true, message: "Login successful" });
    } else {
      res.status(401).json({ success: false, message: "Invalid credentials" });
    }
  } catch(err) {
    res.status(500).json({ success: false, message: "Database error" });
  }
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});