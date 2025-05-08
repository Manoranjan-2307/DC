import React, { useState, useEffect } from 'react';
import AdminCard3 from '../../components/Admin_Cards/A3_Card';
import AdminCard1 from '../../components/Admin_Cards/A1_Card';
import AdminCard2 from '../../components/Admin_Cards/A2_Card';

export default function Admin2() {
  const [heading, setHeading] = useState('');
  const fullHeading = '  Received Complaints:';
  const headingLength = fullHeading.length;
  
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
    <div>
      <div style={{ padding: '5px', marginTop: '105px', marginBottom: '20px', marginLeft: '165px' }}>
        <p style={{ fontFamily: 'tahoma', fontSize: '30px', color: '#5A6387', fontWeight: 500 }}>{heading}</p>
      </div>

      <div
        className="scroll-content"
        style={{
          marginLeft: '168px', 
          marginTop: '10px',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          gap: '20px',
         
          width: '80%', 
          boxSizing: 'border-box', 
          marginBottom: '35px'
        }}
      >
        {/* <AdminCard1 />
        <AdminCard2 /> */}
        
        <AdminCard3 />
      </div>
    </div>
  );
}
