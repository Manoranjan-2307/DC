import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

// Example static initial PDFs (replace with actual data)
const initialPdfs = Array(9).fill({
  id: "static_id",
  name: "Apology Letter XXXX",
  src: "/assets/Apology_Letter_XXXX.pdf", 
  upload_date: "2025-04-20",
});

export default function Apologies() {
  const location = useLocation();
  const { studentId, studentName } = location.state; // Get student details from navigation state

  const [pdfs, setPdfs] = useState([]);
  const [heading, setHeading] = useState("");
  const fullHeading = "  My apologies:";
  const headingLength = fullHeading.length;

  // Fetch PDFs from the backend
  useEffect(() => {
    const fetchPdfs = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/student-pdfs/${studentId}`);
        const data = await response.json();
        const dynamicPdfs = data.map((pdf) => ({
          id: pdf.student_id,
          name: pdf.pdf_name,
          src: `http://localhost:5000${pdf.pdf_src}`,
          upload_date: pdf.upload_date,
        }));
        setPdfs([...initialPdfs, ...dynamicPdfs]); // Merge static and dynamic PDFs
      } catch (error) {
        console.error("Error fetching PDFs:", error);
      }
    };

    fetchPdfs();
  }, [studentId]);

  // Animated heading effect
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < headingLength - 1) {
        setHeading((prev) => prev + fullHeading[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mt-5" style={{ marginLeft: "170px", marginBottom: "50px" }}>
      {/* Heading */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
          marginTop: "50px",
        }}
      >
        <h2
          style={{
            fontFamily: "tahoma",
            fontWeight: "500",
            color: "#5A6387",
            marginTop: "70px",
            fontSize: "1.7rem",
          }}
        >
          {heading}
        </h2>
      </div>

      {/* PDF Grid */}
      <div
        className="row"
        style={{
          marginTop: "30px",
          display: "flex",
          justifyContent: "flex-start",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {pdfs.map((pdf, index) => (
          <div
            key={index}
            style={{
              flex: "0 0 calc(30% - 20px)",
              maxWidth: "calc(30% - 20px)",
              marginBottom: "10px",
            }}
          >
            <a
              href={pdf.src}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: "black",
                display: "block",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  padding: "30px",
                  backgroundColor: "#f0f4f8",
                  cursor: "pointer",
                  boxShadow: "0 6px 8px rgba(0, 0, 0, 0.1)",
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.1)";
                  e.currentTarget.style.boxShadow = "0 8px 12px rgba(0, 0, 0, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "0 6px 8px rgba(0, 0, 0, 0.1)";
                }}
              >
                <p
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: "1.2rem",
                    fontWeight: "500",
                  }}
                >
                  {pdf.name} <br />
                  <span style={{ fontSize: "1.2rem", color: "#555" }}>
                    {pdf.upload_date
                      ? new Date(pdf.upload_date).toLocaleDateString("en-CA")
                      : "—"}
                  </span>
                </p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}