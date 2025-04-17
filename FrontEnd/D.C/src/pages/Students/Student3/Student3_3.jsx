import React, { useState, useEffect } from 'react';
import M1_Card from '../../../components/M_Cards/M1_Card'; 
import M2_Card from '../../../components/M_Cards/M2_Card';


export default function Student3_3() {
  const [heading, setHeading] = useState('');
  const fullHeading = '  Scheduled Meetings:';
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
       <p style={{fontFamily: 'sans-serif', fontSize: '28px', color: '#875D7B'}}>{heading}</p>
    </div>
    <div
      className="scroll-content"
      style={{
        marginLeft: '220px', 
        marginTop: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '60px',
        maxWidth: '800px', 
        width: '100%', 
        boxSizing: 'border-box', 
        marginBottom: '35px'
    }}
  >
    <M1_Card />
    <M2_Card />
  </div>
  </div>
  )
}
