import React from 'react';
import { Card, CardContent, Typography, Grid, Button } from '@mui/material';

const HCard2 = () => {
  const textStyle = {
    fontFamily: 'sans-serif',
    fontSize: '1.2rem',
    color: '#555555',
    fontWeight: 400,
  };

  const labelStyle = {
    fontFamily: 'sans-serif',
    fontSize: '1.2rem',
    color: '#000000',
    fontWeight: 500,
    display: 'inline',
    marginRight: '6px',
  };

  return (
    <Card
      sx={{
        
        width: '25vw',
        height: '200px', 
        margin: '0 auto',
        padding: 2,
        borderRadius: '14px',
        backgroundColor: '#FFFFFF',
        border: '1px solid #D9D4D4',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        fontFamily: 'Tahoma',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        overflow: 'hidden'
      }}
    >
      <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{
              fontFamily: 'sans-serif',
              fontSize: '1.1rem',
              color: 'textSecondary',
            }}
          >
             30 MAR 2025 - 11:00 AM
          </Typography>
        </Grid>

        {/* Date */}
        <Grid item>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#FF5E5E',
              color: '#FFFFFF',
              fontSize: '0.7rem',
              fontFamily: 'sans-serif',
              fontWeight: 600,
              textTransform: 'none',
              borderRadius: '15px',
              padding: '0',
              minWidth: '80px',
              height: '23px',
              
            }}
            
          >
            Expired
          </Button>
        </Grid>
      </Grid>
      <CardContent>
        <Typography variant="body1" component="p" sx={textStyle}>
          <span style={labelStyle}>Issue:</span> Not wearing ID card during PS assesment
        </Typography>
        <Typography variant="body1" component="p" sx={textStyle}>
          <span style={labelStyle}>Venue:</span> CT lab
        </Typography>
        <Typography variant="body1" component="p" sx={textStyle}>
          {/* <span style={labelStyle}>Status:</span> */}
          <span style={{ color: 'green' }}>Accepted</span>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default HCard2;