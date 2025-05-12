import React, { useState, useEffect } from 'react';
import Card1 from '../../../components/Cards/Card1';
import Card2 from '../../../components/Cards/Card2';
import Card3 from '../../../components/Cards/Card3';
import Card4 from '../../../components/Cards/Card4';
import Card5 from "../../../components/Cards/Card5"; 
import axios from "axios";
import { ReasonModal} from '../../../components/R_Cards/R1_Card'; 

export default function Student1_1() {
  const studentId = '7376242AD267';
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
  
  
  
  return (
    <div>
      <div style={{ marginTop: "120px", marginLeft: "152px", marginBottom: "20px"}}>
      <p style={{fontFamily: 'sans-serif', fontSize: '30px', color: '#5A6387', fontWeight: 500}}>Hello Rahul ✨</p>
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
      
      <Card3 />
      <Card2 />
      <Card1 />
      <Card4 />

      {complaints
          .filter((complaint) => complaint.S_ID === studentId)
          .map((complaint) => (
            <Card5 key={complaint.complaint_id} complaint={complaint} />
          ))}
    </div>
    <ReasonModal />
    </div>
  );
}