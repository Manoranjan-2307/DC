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



 // Fetch all PDFs
app.get("/api/student-pdfs", (req, res) => {
  console.log("Fetching all PDFs");
  const sql = "SELECT * FROM student_pdfs";
  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error fetching PDFs:", err);
      return res.status(500).json({ message: "Database error" });
    }
    res.json(results);
  });
});

// Fetch PDFs for a specific student
app.get("/api/student-pdfs/:studentId", (req, res) => {
  const studentId = req.params.studentId;
  const sql = "SELECT * FROM student_pdfs WHERE student_id = ?";
  db.query(sql, [studentId], (err, results) => {
    if (err) {
      console.error("Error fetching PDFs:", err);
      return res.status(500).json({ message: "Database error" });
    }
    res.json(results);
  });
});

// Add a new PDF
app.post("/api/student-pdfs", (req, res) => {
  const { student_id, pdf_name, pdf_src } = req.body;

  if (!student_id || !pdf_name || !pdf_src) {
    return res.status(400).json({ message: "Student ID, PDF name, and PDF source are required" });
  }

  const sql = "INSERT INTO student_pdfs (student_id, pdf_name, pdf_src) VALUES (?, ?, ?)";
  db.query(sql, [student_id, pdf_name, pdf_src], (err, result) => {
    if (err) {
      console.error("Error inserting PDF:", err);
      return res.status(500).json({ message: "Database error" });
    }
    res.json({ message: "PDF added successfully", id: result.insertId });
  });
});

// Serve static files
app.use("/assets", express.static(path.join(__dirname, "../FrontEnd/D.C/public/assets")));

  
