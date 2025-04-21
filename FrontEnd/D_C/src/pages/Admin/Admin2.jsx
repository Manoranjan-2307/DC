import React, { useState, useEffect } from 'react';
import AdminCard1 from '../../components/Admin_Cards/A1_Card';
import AdminCard2 from '../../components/Admin_Cards/A2_Card';

export default function Admin2() {
  const [heading, setHeading] = useState('');
  const fullHeading = '  Complaint History:';
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
   <div>
    <div style={{ padding: '5px', marginTop: '125px', marginBottom: '15px', marginLeft: '125px' }}>
       <p style={{fontFamily: 'sans-serif', fontSize: '30px', color: '#875D7B'}}>{heading}</p>
    </div>
    <div
      className="scroll-content"
      style={{
        marginLeft: '230px', 
        marginTop: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '50px',
        maxWidth: '800px', 
        width: '100%', 
        boxSizing: 'border-box', 
        marginBottom: '30px'
      }}
    >
      <AdminCard1 />
      <AdminCard2 />
      
      
    </div>
    </div>
    
  );
}