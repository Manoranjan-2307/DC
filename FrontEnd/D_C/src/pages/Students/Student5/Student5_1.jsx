import React, { useState, useEffect } from 'react';
import Card1 from '../../../components/Cards/Card1';
import Card2 from '../../../components/Cards/Card2';
import Card3 from '../../../components/Cards/Card3';
import Card4 from '../../../components/Cards/Card4';
import { ReasonModal } from '../../../components/R_Cards/R1_Card';

export default function Student5_1() {
  const studentId = '7376242AL165';
  const status_ = 'pending';
  const [text, setText] = useState('');
  const fullText = '  HELLO HENRY 👋';
  const textLength = fullText.length;
  
  //logic for typing effect
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
    if (index < textLength - 1) {
      setText((prev) => {
      return prev + fullText[index];
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
    <div
      className="scroll-content"
      style={{
        marginLeft: '220px', 
        marginTop: '150px',
        display: 'flex',
        flexDirection: 'column',
        gap: '45px',
        maxWidth: '800px', 
        width: '100%', 
        boxSizing: 'border-box', 
        marginBottom: '30px'
      }}
    >
      <p style={{fontFamily: 'tahoma', fontSize: '30px', color: '#875D7B'}}>{text}</p>
      <Card1 />
      <Card2 />
      <Card3 />
      <Card4 />
    </div>
    <ReasonModal studentId={studentId} status_={status_} />
    </div>
  );
}