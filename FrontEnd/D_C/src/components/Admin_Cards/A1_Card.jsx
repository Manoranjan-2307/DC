import React from "react";
import { Card, CardContent, Typography, Grid, Button } from "@mui/material";

const AdminCard1 = () => {
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
          width: "24vw",
          margin: "0 auto",
          padding: 2,
          borderRadius: "14px",
          backgroundColor: "#FFFFFF",
          border: "1px solid #D9D4D4",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          fontFamily: "Tahoma",
        }}
      >
        <Grid container justifyContent="space-between" alignItems="center">
        
          <Grid item>
            <Button
              variant="contained"
             
              sx={{
                backgroundColor: "#4CAF50",
                color: "#FFFFFF",
                fontSize: "0.8rem",
                fontWeight: 600,
                textTransform: "none",
                borderRadius: "5px",
                padding: "2px 10px",
                "&:hover": {
                  backgroundColor: "#45A049",
                },
              }}
            >
              Create +
            </Button>
          </Grid>

          {/* Date */}
          <Grid item>
            <Typography
              variant="body2"
              color="textSecondary"
              sx={{
                fontFamily: "sans-serif",
                fontSize: "1.1rem",
                color: "textSecondary",
              }}
            >
              02 APR 2025 - 02:00 PM
            </Typography>
          </Grid>
        </Grid>
        <CardContent>
          <Typography variant="body1" component="p" sx={textStyle}>
            <span style={labelStyle}>Name:</span> Karthikeyan JV
          </Typography>
          <Typography variant="body1" component="p" sx={textStyle}>
            <span style={labelStyle}>Register No:</span> 7376242AD199
          </Typography>
          <Typography variant="body1" component="p" sx={textStyle}>
            <span style={labelStyle}>Venue:</span> IT lab-1
          </Typography>
          <Typography variant="body1" component="p" sx={textStyle}>
            <span style={labelStyle}>Issue:</span> Using mobile phone inside the lab
          </Typography>
          <Typography variant="body1" component="p" sx={textStyle}>
            <span style={labelStyle}>Issued By:</span> Indhu Bhashini V
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default AdminCard1;