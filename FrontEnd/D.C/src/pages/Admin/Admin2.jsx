import React from 'react';
import AdminCard1 from '../../components/Admin_Cards/A1_Card';
import AdminCard2 from '../../components/Admin_Cards/A2_Card';

export default function Admin2() {
  return (
   
    <div
      className="scroll-content"
      style={{
        marginLeft: '230px', 
        marginTop: '150px',
        display: 'flex',
        flexDirection: 'column',
        gap: '70px',
        maxWidth: '800px', 
        width: '100%', 
        boxSizing: 'border-box', 
        marginBottom: '30px'
      }}
    >
      <AdminCard1 />
      <AdminCard2 />
      
      
    </div>
    
  );
}