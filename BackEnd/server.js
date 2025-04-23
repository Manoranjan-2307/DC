const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const path = require("path");
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());
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

//   const PORT = 5000;
//   app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });



app.get("/students", (req, res) => {
  const query = "SELECT S_ID, name FROM student_details";
  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching students:", err);
      return res.status(500).json({ error: "Failed to fetch students", details: err.message });
    }
    res.json(results);
  });
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



 // Fetching all PDFs
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


// Fetching PDFs for a specific student
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


// Adding a new PDF
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




//  static files
app.use("/assets", express.static(path.join(__dirname, "../FrontEnd/D.C/public/assets")));



// ✅ Create log entry (used by Logger.jsx)
app.post("/api/log-entry", (req, res) => {
  const { S_ID, student_name, faculty_name, time_date, comment, venue } = req.body;

  console.log(" Received log data:", req.body);


  if (!S_ID || !student_name || !faculty_name || !time_date || !comment || !venue) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const sql = `
    INSERT INTO faculty_logger (S_ID, student_name, faculty_name, time_date, comment, venue)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(sql, [S_ID, student_name, faculty_name, time_date, comment, venue], (err, result) => {
    if (err) {
      console.error("Error inserting log:", err);
      return res.status(500).json({ error: "Failed to create log", details: err.message });
    }
    res.status(201).json({ message: "Log entry created" });
  });
});

// ✅ POST a revoked complaint
app.post("/api/revoked", (req, res) => {
  const { roll_no, s_name, reason, complaint_id } = req.body;

  if (!roll_no || !s_name || !reason || !complaint_id) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const sql = `INSERT INTO REASON_ (Roll_no, S_name, REASON, STATUS_, complaint_id) 
               VALUES (?, ?, ?, NULL, ?)`;

  db.query(sql, [roll_no, s_name, reason, complaint_id], (err, result) => {
    if (err) {
      console.error("Insert error:", err);
      return res.status(500).json({ error: "Database insert failed", details: err.message });
    }
    res.status(201).json({ message: "Revoked complaint created", id: result.insertId });
  });
});

// ✅ GET all revoked complaints with joined info
app.get("/api/revoked", (req, res) => {
  const sql = `SELECT R.*, F.comment, F.venue, F.time_date 
               FROM REASON_ R 
               JOIN faculty_logger F ON R.complaint_id = F.complaint_id`;

  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error fetching revoked complaints:", err);
      return res.status(500).json({ error: "Database error", details: err.message });
    }
    res.json(results);
  });
});

// ✅ Accept / Decline complaint
app.put("/api/revoked/:roll_no", (req, res) => {
  const { status } = req.body;
  const roll_no = req.params.roll_no;

  if (status !== "Accepted" && status !== "Declined") {
    return res.status(400).json({ error: "Invalid status value" });
  }

  const sql = "UPDATE REASON_ SET STATUS_ = ? WHERE Roll_no = ?";
  db.query(sql, [status, roll_no], (err, result) => {
    if (err) {
      console.error("Error updating revoked complaint status:", err);
      return res.status(500).json({ error: "Failed to update complaint status", details: err.message });
    }
    res.json({ message: `Complaint ${status}` });
  });
});




// INSERTING meeting details
app.post("/api/meeting-details", (req, res) => {
  console.log("Request Body:", req.body); 
  const { studentId, venue, date, time, reason } = req.body;

  if (!studentId || !venue || !date || !time || !reason) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const sql = `
    INSERT INTO meeting_details (S_ID, VENUE, DATE_, TIME_, INFO, STATUS_)
    VALUES (?, ?, STR_TO_DATE(?, '%Y-%m-%d'), ?, ?, 'pending')
  `;

  db.query(sql, [studentId, venue, date, time, reason], (err, result) => {
    if (err) {
      console.error("Error inserting data into meeting_details:", err);
      return res.status(500).json({ message: "Database error" });
    }
    res.status(201).json({ message: "Meeting details added successfully" });
  });
});


// FOR FETCHING meeting details in card
app.get("/api/meeting-details", (req, res) => {
  const sql = `
    SELECT No_ AS id, S_ID AS sId, VENUE AS venue, DATE_FORMAT(DATE_, '%d-%m-%Y') AS date, 
           TIME_FORMAT(TIME_, '%h:%i %p') AS time, INFO AS info, STATUS_ AS status
    FROM meeting_details
    ORDER BY No_ DESC
  `;

  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error fetching meeting details:", err);
      return res.status(500).json({ message: "Database error" });
    }
    res.json(results);
  });
});

//FOR UPDATING ATTENDANCE IN MEETING
app.post("/api/update-attendance", (req, res) => {
  const { sId, venue, date, status } = req.body;

  if (!sId || !venue || !date || !status) {
    console.error("Missing required fields:", req.body); // Debug log
    return res.status(400).json({ message: "Missing required fields" });
  }

  console.log("Received data:", req.body); // Debug log

  const sql = `
    UPDATE meeting_details 
    SET STATUS_ = ? 
    WHERE S_ID = ? AND VENUE = ? AND DATE_ = STR_TO_DATE(?, '%d-%m-%Y')
  `;

  db.query(sql, [status, sId, venue, date], (err, result) => {
    if (err) {
      console.error("Error updating attendance:", err); // Debug log
      return res.status(500).json({ message: "Database error", error: err.message });
    }

    console.log("SQL Result:", result); // Debug log

    if (result.affectedRows > 0) {
      res.json({ message: "Attendance updated successfully" });
    } else {
      res.status(404).json({ message: "Meeting not found" });
    }
  });
});

const PORT = 5000;
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});