import React, { useState, useEffect } from 'react';
import HCard3 from '../../../components/H_Cards/H3_Card';
import HCard1 from '../../../components/H_Cards/H1_Card';
import HCard2 from '../../../components/H_Cards/H2_Card';
import HCard4 from '../../../components/H_Cards/H4_Card';
import HCard5 from '../../../components/H_Cards/H5_Card';
import axios from 'axios';


export default function Student1_2() {
  // const [heading, setHeading] = useState('');
  // const fullHeading = '  Your History:';
  // const headingLength = fullHeading.length;
  const [complaints, setComplaints] = useState([]);
  const studentId = '7376242AD267'; 

  // useEffect(() => {
  //     let index = 0;
  //     const interval = setInterval(() => {
  //     if (index < headingLength - 1) {
  //       setHeading((prev) => {
  //       console.log(index, fullHeading[index]); 
  //       return prev + fullHeading[index];
  //   });
  //       index++;
  //   } else {
  //       clearInterval(interval);
  //     }
  //   }, 100);
      
  //     return () => clearInterval(interval);
  //       }, []);

  useEffect(() => {
    
    if (studentId === '7376242AD267') {
      axios
        .get(`http://localhost:5000/api/complaints/${studentId}`)
        .then((res) => {
          setComplaints(res.data); 
        })
        .catch((err) => {
          console.error('Error fetching complaint history:', err);
        });
    }
  }, []);
  
  
  return (
    <div>
      <div style={{ padding: '5px', marginTop: '100px', marginBottom: '10px', marginLeft: '175px' }}>
       <p style={{fontFamily: 'tahoma', fontSize: '30px', color: '#5A6387', fontWeight: 500}}>My History:</p>
    </div>
    <div
      className="scroll-content"
      style={{
        marginLeft: '175px',
        marginTop: '25px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: '30px',
        marginBottom: '40px',
        width: '80%',
  }}
>
      <HCard3 />
      <HCard2 />
      <HCard1 />
      <HCard4 />
    
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