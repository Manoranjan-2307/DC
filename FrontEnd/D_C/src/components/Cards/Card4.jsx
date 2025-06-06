import React from "react";
import { Card, CardContent, Typography, Button, Grid } from "@mui/material";
import { ReasonModal, openbox } from "../R_Cards/R1_Card";

const ComplaintCard4 = () => {
  const textStyle = {
    fontFamily: "sans-serif",
    fontSize: "1.2rem",
    color: "#555555",
    fontWeight: 400,
  };

  const labelStyle = {
    fontFamily: "sans-serif",
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
          width: "28vw",
          minHeight: "270px", 
          margin: "0 auto",
          padding: 2,
          borderRadius: "14px",
          backgroundColor: "#FFFFFF",
          border: "1px solid #D9D4D4",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          fontFamily: "Tahoma",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between", 
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
            07 APR 2025 - 03:00 PM
          </Typography>
        </Grid>
        <CardContent>
          <Typography variant="body1" component="p" sx={textStyle}>
            <span style={labelStyle}>Complaint Code:</span> 
            <span style={{ color: "red" }}>N/A</span>
          </Typography>
          <Typography variant="body1" component="p" sx={textStyle}>
            <span style={labelStyle}>Venue:</span> AI&DS lab-3
          </Typography>
          <Typography variant="body1" component="p" sx={textStyle}>
            <span style={labelStyle}>Complaint Details:</span> No proper haircut
          </Typography>
          {/* <Typography variant="body1" component="p" sx={textStyle}>
            <span style={labelStyle}>Faculty:</span> Subbhulakshmi M
          </Typography> */}
          <Typography variant="body1" component="p" sx={textStyle}>
            <span style={labelStyle}>Timer:</span>
            <span style={{ color: "red" }}>03:40:58</span>
          </Typography>
        </CardContent>
        
        <Grid container justifyContent="flex-end" spacing={1}>
          <Grid item>
            <Button
              variant="contained"
              color="success"
              sx={{ fontFamily: "sans-serif", fontSize: "0.95rem" }}
            >
              Accept
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="error"
              sx={{ fontFamily: "sans-serif", fontSize: "0.95rem" }}
              onClick={() => openbox()} 
            >
              Revoke
            </Button>
          </Grid>
        </Grid>
      </Card>
      <ReasonModal />
    </>
  );
};

export default ComplaintCard4;