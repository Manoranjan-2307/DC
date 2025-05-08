import React, { useState, useEffect } from "react";
import Card5 from "../../../components/Cards/Card5"; 
import axios from "axios";
import { ReasonModal } from "../../../components/R_Cards/R1_Card"; 

export default function Student2_1() {
  const studentId = "7376242CS111"; 
  const [complaints, setComplaints] = useState([]);
  // const [text, setText] = useState("");
  // const fullText = "  HELLO KISHORE 👋";

  // Typing effect for welcome message
  // useEffect(() => {
  //   let index = 0;
  //   const interval = setInterval(() => {
  //     if (index < fullText.length) {
  //       setText((prev) => prev + fullText[index]);
  //       index++;
  //     } else {
  //       clearInterval(interval);
  //     }
  //   }, 100);

  //   return () => clearInterval(interval);
  // }, []);

  // Fetch complaints for the specific student
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

  return (
    <div>
      <div style={{ marginTop: "120px", marginLeft: "152px", marginBottom: "20px"}}>
      <p style={{fontFamily: 'sans-serif', fontSize: '30px', color: '#5A6387', fontWeight: 500}}>Hello Kishore ✨</p>
      </div>
      <div
        className="scroll-content"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)', 
          gap: '30px',                          
          padding: '20px',
          marginLeft: '127px',
          width: 'calc(100% - 170px)',
          boxSizing: 'border-box',
          marginBottom: "30px"
        }}
      >
        
        {complaints
          .filter((complaint) => complaint.S_ID === studentId)
          .map((complaint) => (
            <Card5 key={complaint.complaint_id} complaint={complaint} />
          ))}
      </div>

      {/* Modal should still render with correct props */}
      <ReasonModal  />


    </div>
  );
}
