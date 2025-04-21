import React from "react";
import { Card, CardContent, Typography, Button, Grid } from "@mui/material";
import { red } from "@mui/material/colors";

const AdminCard2 = () => {
  const textStyle = {
    fontFamily: "sans-serif",
    fontSize: "1.2rem",
    color: "#555555",
    fontWeight: 400,
  };

  const labelStyle = {
    fontFamily: "Tahoma",
    fontSize: "1.2rem",
    color: "#000000",
    fontWeight: 500,
    display: "inline",
    marginRight: "6px",
  };

  return (
    <>
      <Card
        sx={{
          maxWidth: 800,
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
        <Grid container justifyContent="flex-end" alignItems="center">
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{
              fontFamily: "sans-serif",
              fontSize: "1.1rem",
              color: "textSecondary",
            }}
          >
            30 MAR 2025 - 11:00 AM
          </Typography>
        </Grid>
        <CardContent>
          <Typography variant="body1" component="p" sx={textStyle}>
            <span style={labelStyle}>Name:</span> Rahul K
          </Typography>
          <Typography variant="body1" component="p" sx={textStyle}>
            <span style={labelStyle}>Student ID:</span> 7376242AD267
          </Typography>
          <Typography variant="body1" component="p" sx={textStyle}>
            <span style={labelStyle}>Venue:</span> CT lab
          </Typography>
          <Typography variant="body1" component="p" sx={textStyle}>
            <span style={labelStyle}>Issue:</span> Not wearing ID card during PS assessment
          </Typography>
          <Typography variant="body1" component="p" sx={textStyle}>
            <span style={labelStyle}>Issued By:</span> Sathiya S
          </Typography>
          <Typography variant="body1" component="p" sx={textStyle} style={{color: 'red'}}>
            <span style={labelStyle}>Enquiry:</span> pending
          </Typography>
        </CardContent>
      </Card>
     
    </>
  );
};

export default AdminCard2;