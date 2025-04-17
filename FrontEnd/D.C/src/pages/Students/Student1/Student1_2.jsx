import React from 'react';
import HCard3 from '../../../components/H_Cards/H3_Card';
import HCard1 from '../../../components/H_Cards/H1_Card';
import HCard2 from '../../../components/H_Cards/H2_Card';
import HCard4 from '../../../components/H_Cards/H4_Card';


export default function Student1_2() {
  return (
    <div>
    <div style={{ padding: '5px', marginTop: '125px', marginBottom: '5px', marginLeft: '125px' }}>
       <p style={{fontFamily: 'sans-serif', fontSize: '28px', color: '#875D7B'}}>History of Complaints:</p>
    </div>
    <div
      className="scroll-content"
      style={{
        marginLeft: '220px',
        marginTop: '20px',
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