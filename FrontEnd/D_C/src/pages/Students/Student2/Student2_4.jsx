import React, { useState, useEffect } from "react";
import Apology_Letter_KishoreK from "/assets/Apology_Letter_KishoreK.pdf";
import { useLocation } from "react-router-dom";

const initialPdfs = Array(9).fill({
  id: "7376242CS111",
  name: "Apology Letter 7376242CS111",
  src: Apology_Letter_KishoreK,
  upload_date: "2025-04-20",
});

export default function Student2_4() {
  const location = useLocation();
  const [studentPdf, setStudentPdf] = useState([]);
  const [heading, setHeading] = useState("");
  const fullHeading = "  My apologies:";
  const headingLength = fullHeading.length;
  const studentId = "7376242CS111";

  // Fetching PDFs from the backend
  useEffect(() => {
    fetch(`http://localhost:5000/api/student-pdfs/${studentId}`)
      .then((response) => response.json())
      .then((data) => {
        setStudentPdf(data);
      })
      .catch((error) => console.error("Error fetching PDFs:", error));
  }, [studentId]);

  // Merging static and dynamic PDFs
  const mergedPdfs = [
    ...initialPdfs,
    ...studentPdf.map((pdf) => ({
      id: pdf.student_id,
      name: pdf.pdf_name,
      src: `http://localhost:5000${pdf.pdf_src}`,
      upload_date: pdf.upload_date,
    })),
  ];

  
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
        {mergedPdfs.map((pdf, index) => (
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