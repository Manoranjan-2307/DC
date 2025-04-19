import React, { useState, useEffect } from "react";
import Apology_Letter_KarthikeyanJV from "../../../assets/Apology_Letter_KarthikeyanJV.pdf";

const pdfs = Array(9).fill({
  id: "7376242AD199",
  name: "Apology Letter 7376242AD199",
  src: Apology_Letter_KarthikeyanJV,
});


export default function Student4_4() {
  const [heading, setHeading] = useState("");
  const fullHeading = "  Your apologies:";
  const headingLength = fullHeading.length;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < headingLength - 1) {
        setHeading((prev) => {
          console.log(index, fullHeading[index]);
          return prev + fullHeading[index];
        });
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);
  

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