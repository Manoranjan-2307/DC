import React from 'react';
import Welcome_Card from '../../components/Admin_Cards/Welcome_card';
import { Sparkles } from 'lucide-react';

export default function Admin1() {
  return (
    <div style={{ marginBottom: '150px', backgroundColor: '#FFFFFF' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          height: '150px',
          marginTop: '60px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: '570px' }}>
          <p
            style={{
              fontFamily: 'Segoe UI',
              fontSize: '2.2rem',
              margin: 0,
              fontWeight: 600,
              color: '#555555',
              marginRight: '10px',
            }}
          >
            WELCOME ADMIN
          </p>
          <Sparkles size={32} color="#fbbf24" />
        </div>
      </div>

      <div style={{ marginTop: '80px', marginLeft: '550px' }}>
        <Welcome_Card />
      </div>
    </div>
  );
}
