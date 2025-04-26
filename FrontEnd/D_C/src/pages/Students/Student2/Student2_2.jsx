import React, { useState, useEffect } from 'react';
import HCard3 from '../../../components/H_Cards/H3_Card';
import HCard1 from '../../../components/H_Cards/H1_Card';
import HCard2 from '../../../components/H_Cards/H2_Card';
import HCard4 from '../../../components/H_Cards/H4_Card';
import HCard5 from '../../../components/H_Cards/H5_Card';
import axios from 'axios';

export default function Student2_2() {
  const [heading, setHeading] = useState('');
  const [complaints, setComplaints] = useState([]);
  const fullHeading = '  Your History:';
  const headingLength = fullHeading.length;

  const studentId = '7376242CS111'; // The studentId to filter complaints

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

  useEffect(() => {
    // Fetch complaints only for the specific student
    if (studentId === '7376242CS111') {
      axios
        .get(`http://localhost:5000/api/complaints/${studentId}`)
        .then((res) => {
          setComplaints(res.data); // Set the complaints for the student
        })
        .catch((err) => {
          console.error('Error fetching complaint history:', err);
        });
    }
  }, []);

  return (
    <div>
      <div
        style={{
          padding: '5px',
          marginTop: '125px',
          marginBottom: '15px',
          marginLeft: '130px',
        }}
      >
        <p
          style={{
            fontFamily: 'sans-serif',
            fontSize: '30px',
            color: '#875D7B',
          }}
        >
          {heading}
        </p>
      </div>

      <div
        className="scroll-content"
        style={{
          marginLeft: '140px',
          marginTop: '25px',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          gap: '45px',
          marginBottom: '30px',
          width: '80%',
        }}
      >
        {/* Filter complaints only for the student with matching studentId */}
        {complaints
  .filter((complaint) => complaint.S_ID === studentId)
  .map((complaint) => (
    <HCard5
      key={complaint.complaint_id} // Use only complaint_id as the unique key
      complaint={complaint}
    />
  ))}

        {/* Fallback to showing other cards if no complaints are found for the student */}
        {complaints.length === 0 && (
          <>
            <HCard2 />
            <HCard4 />
            <HCard1 />
            <HCard3 />
            <HCard2 />
            <HCard1 />
          </>
        )}
      </div>
    </div>
  );
}
