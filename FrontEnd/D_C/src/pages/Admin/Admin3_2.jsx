import React, { useState, useEffect } from 'react';
import S_Card1 from '../../components/Admin_Cards/S_Card1'; 
import S_Card2 from '../../components/Admin_Cards/S_Card2';


export default function Admin3_2() {
  const [heading, setHeading] = useState('');
  const fullHeading = '  Your Schedules:';
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
       <p style={{fontFamily: 'tahoma', fontSize: '30px', color: '#875D7B'}}>{heading}</p>
    </div>
    <div
      className="scroll-content"
      style={{
        marginLeft: '220px', 
        marginTop: '10px',
        display: 'flex',
        flexDirection: 'column',
        gap: '60px',
        maxWidth: '800px', 
        width: '100%', 
        boxSizing: 'border-box', 
        marginBottom: '35px'
    }}
  >
    <S_Card1 />
    <S_Card2 />
  </div>
  </div>
  )
}
