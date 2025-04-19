import React, { useState, useEffect } from "react";
import Apology_Letter_KarthikeyanJV from "../../assets/Apology_Letter_KarthikeyanJV.pdf";
import Apology_Letter_KishoreK from "../../assets/Apology_Letter_KishoreK.pdf";
import Apology_Letter_RahulK from "../../assets/Apology_Letter_RahulK.pdf";
import Apology_Letter_SangeethM from "../../assets/Apology_Letter_SangeethM.pdf";
import Apology_Letter_HenryM from "../../assets/Apology_Letter_HenryM.pdf";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";


export const pdfs = [
  { id: "7376242AD199", name: "Apology Letter 7376242AD199", src: Apology_Letter_KarthikeyanJV },
  { id: "7376242CS111", name: "Apology Letter 7376242CS111", src: Apology_Letter_KishoreK },
  { id: "7376242AD267", name: "Apology Letter 7376242AD267", src: Apology_Letter_RahulK },
  { id: "7376242IT201", name: "Apology Letter 7376242IT201", src: Apology_Letter_SangeethM },
  { id: "7376242AL165", name: "Apology Letter 7376242AL165", src: Apology_Letter_HenryM },
  { id: "7376242AD199", name: "Apology Letter 7376242AD199", src: Apology_Letter_KarthikeyanJV },
  { id: "7376242CS111", name: "Apology Letter 7376242CS111", src: Apology_Letter_KishoreK },
  { id: "7376242AD267", name: "Apology Letter 7376242AD267", src: Apology_Letter_RahulK },
  { id: "7376242IT201", name: "Apology Letter 7376242IT201", src: Apology_Letter_SangeethM },
];


export default function Admin4() {
  const [heading, setHeading] = useState("");
  const fullHeading = "  Your uploads:";
  const headingLength = fullHeading.length;
  const [studentId, setStudentId] = useState("");
  const [studentPdf, setStudentPdf] = useState(() => {
    // Load from localStorage or initialize with an empty object
    const savedData = localStorage.getItem("studentPdf");
    return savedData ? JSON.parse(savedData) : {};
  });
  const navigate = useNavigate();



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


  // Save studentPdf to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("studentPdf", JSON.stringify(studentPdf));
  }, [studentPdf]);


  const uploadPDF = () =>{
    let inp = document.getElementById("inp");
    inp.style.visibility = "visible";
  }

  const processStudentId = () => {
    const matchedPdf = pdfs.find((pdf) => pdf.id === studentId); // Find the PDF by ID
    if (matchedPdf) {
      const updatedStudentPdf = {
        ...studentPdf,
        [studentId]: [...(studentPdf[studentId] || []), matchedPdf], // Append the matched PDF
      };
      setStudentPdf(updatedStudentPdf); // Update local state
      alert(`PDF for Student ID ${studentId} has been added.`);
      navigate("/student1_4", { state: { studentPdf: updatedStudentPdf } }); // Navigate to Student1_4 with state
    } else {
      alert("No PDF found for the entered Student ID.");
    }
    setStudentId(""); // Clear the input field
  };

  // Combine initial PDFs and dynamically added PDFs for display
  const combinedPdfs = [...pdfs, ...Object.values(studentPdf).flat()];

  return (
    <div className="container mt-5" style={{ marginLeft: "150px", marginBottom: "320px" }}>
      {/* Heading and Button */}
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
            color: "#875D7B",
            marginTop: "50px",
            fontSize: "1.7rem",
          }}
        >
          {heading}
        </h2>

        <input
          type="text"
          id="inp"
          placeholder="Enter Student ID"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)} // Update state on input change
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              processStudentId();
            }
          }}
          style={{
            padding: "10px",
            marginRight: "10px",
            border: "2px solid #ccc",
            borderRadius: "5px",
            marginTop: "50px",
            fontFamily: "tahoma",
            visibility: "hidden",
          }}
        />
        <Button
          variant="contained"
          color="primary"
          style={{
            backgroundColor: "#1f80e0",
            color: "white",
            marginTop: "50px",
          }}
          onClick={uploadPDF}
        >
          Upload PDF
        </Button>
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
        {combinedPdfs.map((pdf, index) => (
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
              >
                <p
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: "1.2rem",
                    fontWeight: "500",
                  }}
                >
                  {pdf.name}
                </p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}