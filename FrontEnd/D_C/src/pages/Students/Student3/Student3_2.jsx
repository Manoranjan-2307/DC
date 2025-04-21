import React from 'react';
import HCard3 from '../../../components/H_Cards/H3_Card';
import HCard1 from '../../../components/H_Cards/H1_Card';
import HCard2 from '../../../components/H_Cards/H2_Card';
import HCard4 from '../../../components/H_Cards/H4_Card';

export default function Student3_2() {
  return (
    <div
      className="scroll-content"
      style={{
        marginLeft: '220px',
        marginTop: '150px',
        display: 'flex', 
        flexDirection: 'column', 
        gap: '45px', 
        marginBottom: '20px',
        width: '100%',
        maxWidth: '800px',

      }}
    >
      <HCard2 />
      <HCard4 />
      <HCard1 />
      <HCard3 />
      
    </div>
  );
}