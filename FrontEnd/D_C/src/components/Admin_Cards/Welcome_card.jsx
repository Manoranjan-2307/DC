import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";

const Welcome_Card = () => {
  
  const textStyle = {
    fontFamily: "sans-serif",
    fontSize: "1.3rem",
    color: "red",
    fontWeight: 400,
  };

  const labelStyle = {
    fontFamily: "Helvetica",
    fontSize: "1.3rem",
    color: "#000000",
    fontWeight: 400,
    display: "inline",
    marginRight: "6px",
    
  };

  return (
    <>
      <Card
        sx={{
          maxWidth: 500,
          width: "100%",
          margin: "0 auto",
          padding: 2,
          borderRadius: "14px",
          backgroundColor: "#FFFFFF",
          border: "1px solid #D9D4D4",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          fontFamily: "Tahoma",
        }}
      >
        <Grid container justifyContent="center" alignItems="center">
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{
              fontFamily: "sans-serif",
              fontSize: "1.5rem",
              color: "textSecondary",
              fontWeight: 600,
              textAlign: 'center'
            }}
          >
            OVERVIEW
          </Typography>
        </Grid>
        <CardContent>
          <Typography variant="body1" component="p" sx={textStyle}>
            <span style={labelStyle}>Total Complaints: </span> 2
          </Typography>
          <Typography variant="body1" component="p" sx={textStyle}>
            <span style={labelStyle}>Pending: </span> 2
          </Typography>
          <Typography variant="body1" component="p" sx={textStyle}>
            <span style={labelStyle}>Resolved: </span> 0
          </Typography>
        </CardContent>
      </Card>
     
    </>
  );
};

export default Welcome_Card;