import React, {useState, useEffect} from 'react';
import HCard3 from '../../../components/H_Cards/H3_Card';
import HCard1 from '../../../components/H_Cards/H1_Card';
import HCard2 from '../../../components/H_Cards/H2_Card';
import HCard4 from '../../../components/H_Cards/H4_Card';

export default function Student4_2() {
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
        marginLeft: '140px',
        marginTop: '25px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: '45px',
        marginBottom: '30px',
        width: '80%',
  }}
>
      <HCard3 />
      <HCard1 />
      <HCard4 />
      <HCard2 />
      <HCard3 />
      <HCard1 />
      
    </div>
    </div>
  );
}