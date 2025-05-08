import React, { useState, useEffect } from 'react';
import M1_Card from '../../../components/M_Cards/M1_Card'; 
import M2_Card from '../../../components/M_Cards/M2_Card';
import M3_Card from '../../../components/M_Cards/M3_Card';

export default function Student1_3() {
  const [heading, setHeading] = useState('');
  const fullHeading = '  Scheduled Meetings:';
  const headingLength = fullHeading.length;
  const [meetings, setMeetings] = useState([]); 
  const studentId = "7376242AD267"; 
  
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
    const fetchMeetings = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/meeting-details");
        const data = await response.json();
        console.log("Fetched Meetings:", data);
        const filteredMeetings = data.filter((meeting) => {
          console.log("Meeting S_ID:", meeting.sId, "Student ID:", studentId); 
          return meeting.sId === studentId; 
        });
        console.log("Filtered Meetings for Student:", filteredMeetings);
        setMeetings(filteredMeetings);
      } catch (error) {
        console.error("Error fetching meetings:", error);
      }
    };

    fetchMeetings();
  }, [studentId]);

  return (
    <div>
      <div style={{ padding: '5px', marginTop: '100px', marginLeft: '173px' }}>
        <p style={{fontFamily: 'tahoma', fontSize: '28px', color: '#5A6387'}}>{heading}</p>
      </div>
      <div
        className="scroll-content"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)', 
          gap: '45px',                          
          padding: '20px',
          marginLeft: '150px',
          width: 'calc(100% - 170px)',
          boxSizing: 'border-box',
          marginBottom: "30px",
          marginTop: "0px"
        }}
      >
        <M1_Card />
        <M2_Card />
        <M3_Card meetings={meetings} />
      </div>
    </div>
  );
}
