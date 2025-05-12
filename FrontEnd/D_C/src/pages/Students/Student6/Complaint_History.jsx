import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import HCard1 from "../../../components/H_Cards/H1_Card";
import HCard2 from "../../../components/H_Cards/H2_Card";
import HCard3 from "../../../components/H_Cards/H3_Card";
import HCard4 from "../../../components/H_Cards/H4_Card";
import HCard5 from "../../../components/H_Cards/H5_Card";
import axios from "axios";

export default function Complaint_History() {
  const location = useLocation();
  const { studentId, studentName } = location.state; // Get student details from navigation state
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/complaints/${studentId}`);
        setComplaints(response.data);
      } catch (error) {
        console.error("Error fetching complaint history:", error);
      }
    };

    fetchHistory();
  }, [studentId]);

  return (
    <div >
      <div style={{ padding: '5px', marginTop: '100px', marginBottom: '10px', marginLeft: '160px' }}>
        <p style={{fontFamily: 'tahoma', fontSize: '30px', color: '#5A6387', fontWeight: 500}}>My History:</p>
      </div>
      <div
        className="scroll-content"
        style={{
          marginLeft: '160px',
          marginTop: '20px',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          gap: '30px',
          marginBottom: '30px',
          width: '80%',
          minHeight: "200px"
        }}
      >
        {/* <HCard1 />
        <HCard2 />
        <HCard3 />
        <HCard4 />
         <HCard4 />
          <HCard4 />
         <HCard4 />
          <HCard4 />
           <HCard4 /> */}

        {complaints
              .filter((complaint) => complaint.S_ID === studentId)
              .map((complaint) => (
              <HCard5
              key={complaint.complaint_id} 
              complaint={complaint}
          />
        ))}

        
      </div>
    </div>
  );
}