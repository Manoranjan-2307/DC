import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Card5 from "../../../components/Cards/Card5";
import axios from "axios";
import { ReasonModal } from "../../../components/R_Cards/R1_Card";
import Card1 from "../../../components/Cards/Card1"; // Importing Card1 component
import Card2 from "../../../components/Cards/Card2"; // Importing Card2 component
import Card3 from "../../../components/Cards/Card3"; // Importing Card3 component
import Card4 from "../../../components/Cards/Card4"; // Importing Card4 component


export default function Recent_complaints() {
  const location = useLocation();
  const { studentId, studentName } = location.state;
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/complaints/${studentId}`
        );
        setComplaints(response.data);
      } catch (error) {
        console.error("Error fetching complaints:", error);
        alert("Failed to fetch complaints. Please try again later.");
      }
    };

    fetchComplaints();
  }, [studentId]);

  const filteredComplaints = complaints.filter(
    (complaint) => complaint.S_ID === studentId
  );

  
  let parentMarginBottom = "0px";
  if (filteredComplaints.length === 0) {
    parentMarginBottom = "500px";
  } else if (filteredComplaints.length <= 3 ) {
    parentMarginBottom = "350px";
  }

  return (
    <div style={{ marginBottom: parentMarginBottom }}>
      <div
        style={{
          marginTop: "100px",
          marginLeft: "143px",
          marginBottom: "15px",
        }}
      >
        <p
          style={{
            fontFamily: "sans-serif",
            fontSize: "30px",
            color: "#5A6387",
            fontWeight: 500,
          }}
        >
          Hello {studentName} ✨
        </p>
      </div>

      <div
        className="scroll-content"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "30px",
          padding: "20px",
          marginLeft: "120px",
          width: "calc(100% - 170px)",
          boxSizing: "border-box",
          marginBottom: "30px",
        }}
      >
        {/* <Card3 />
        <Card3 />
        <Card3 />
        <Card3 />
        <Card3 /> */}

        {filteredComplaints.map((complaint) => (
          <Card5 key={complaint.complaint_id} complaint={complaint} />
        ))}
      </div>

      <ReasonModal />
    </div>
  );
}
