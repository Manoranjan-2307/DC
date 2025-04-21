import React, { useState, useEffect } from 'react';
import HCard3 from '../../../components/H_Cards/H3_Card';
import HCard1 from '../../../components/H_Cards/H1_Card';
import HCard2 from '../../../components/H_Cards/H2_Card';
import HCard4 from '../../../components/H_Cards/H4_Card';


export default function Student1_2() {
  const [heading, setHeading] = useState('');
  const fullHeading = '  Your History:';
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
      <div style={{ padding: '5px', marginTop: '125px', marginBottom: '15px', marginLeft: '130px' }}>
       <p style={{fontFamily: 'sans-serif', fontSize: '30px', color: '#875D7B'}}>{heading}</p>
    </div>
    <div
      className="scroll-content"
      style={{
        marginLeft: '235px',
        marginTop: '25px',
        display: 'flex', 
        flexDirection: 'column', 
        gap: '45px', 
        marginBottom: '30px',
        width: '100%',
        maxWidth: '800px',

      }}
    >
      <HCard3 />
      <HCard2 />
      <HCard1 />
      <HCard4 />
      
    </div>
    </div>
  );
}