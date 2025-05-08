import React from 'react';
import { Card, CardContent, Typography, Grid, Button } from '@mui/material';

const HCard1 = () => {
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
        overflow: 'hidden',
      }}
    >
      <Grid container justifyContent="space-between" alignItems="center">
        {/* Button for "Expired" */}
        <Grid item>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#008000',
              color: '#FFFFFF',
              fontSize: '0.7rem',
              fontWeight: 600,
              textTransform: 'none',
              borderRadius: '15px',
              padding: '0',
              minWidth: '80px',
              height: '23px',
              '&:hover': {
                backgroundColor: '#00800',
              },
            }}
            
          >
            Active
          </Button>
        </Grid>

        {/* Date */}
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
            21 MAR 2025 - 10:00 AM
          </Typography>
        </Grid>
      </Grid>

      <CardContent>
        <Typography variant="body1" component="p" sx={textStyle}>
          <span style={labelStyle}>Issue:</span> Dress code not followed
        </Typography>
        <Typography variant="body1" component="p" sx={textStyle}>
          <span style={labelStyle}>Venue:</span> Cyber security lab
        </Typography>
        <Typography variant="body1" component="p" sx={textStyle}>
          <span style={{ color: 'red' }}>Revoked</span>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default HCard1;