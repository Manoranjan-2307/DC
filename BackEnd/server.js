const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "manobeast2307",
    database: "dc_portal",
  });
  
  db.connect((err) => {
    if (err) {
      console.error("Database connection failed:", err);
      return;
    }
    console.log("Connected to MySQL database");
  });

  const PORT = 5000;
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


  // For inserting reason 
  app.post("/api/reason", (req, res) => {
    console.log("Request Body:", req.body);
    const { studentId,text, status_ } = req.body;
  
    if (!text || !studentId || !status_) {
      return res.status(400).json({ message: "Reason, studentId and status are required" });
    }
  
    const sql = "INSERT INTO `REASON_` (`S_ID`,Reason,`Status_`) VALUES (?, ?, ?);";
    db.query(sql, [studentId,text,status_], (err, result) => {
      if (err) {
        console.error("Insert Error:", err);
        return res.status(500).json({ message: "Database error" });
      }
      res.json({ message: "Reason inserted successfully" });
    });
    
  });
  

  
