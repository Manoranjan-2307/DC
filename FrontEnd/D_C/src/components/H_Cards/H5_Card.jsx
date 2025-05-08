import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Grid, Button } from '@mui/material';
import axios from "axios";

const HCard5 = ({ complaint }) => {
  const [complaintData, setComplaintData] = useState(null);

  useEffect(() => {
    const fetchLatestData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/complaints/detail/${complaint.complaint_id}`
        );
        setComplaintData(res.data);
      } catch (err) {
        console.error("Error fetching updated complaint data:", err);
      }
    };

    fetchLatestData();

   
    const interval = setInterval(fetchLatestData, 10000);

    return () => clearInterval(interval);
  }, [complaint.complaint_id]);

  const formatDateTime = (datetime) => {
    const date = new Date(datetime);
    const day = date.toLocaleString("en-US", { day: "2-digit" });
    const month = date.toLocaleString("en-US", { month: "short" }).toUpperCase();
    const year = date.getFullYear();
    const time = date.toLocaleString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }).toUpperCase();
    return `${day} ${month} ${year} - ${time}`;
  };


  

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

  if (!complaintData) return <Typography variant="body1" component="p" sx={textStyle}>Loading...</Typography>;

  // For button 
  console.log(complaintData.status);
  const buttonText = complaintData.status === "Pending" ? "Active" : "Expired";
  const buttonColor = complaintData.status === "Pending" ? "green" : "#FF5E5E";


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
        {/* Button for "Expired" */}
        <Grid item>
          <Button
            variant="contained"
            sx={{
              backgroundColor: buttonColor,
              color: '#FFFFFF',
              fontSize: '0.7rem',
              // fontFamily: 'sans-serif',
              fontWeight: 600,
              textTransform: 'none',
              borderRadius: '15px',
              padding: '0',
              minWidth: '80px',
              height: '23px',
              '&:hover': {
                backgroundColor: buttonColor,
              },
            }}
            
          >
            {buttonText}
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
             {formatDateTime(complaintData.time_date)}
          </Typography>
        </Grid>
      </Grid>

      <CardContent>
      <Typography variant="body1" sx={{...textStyle,
                 display: "-webkit-box",
                 WebkitLineClamp: 2,
                 WebkitBoxOrient: "vertical",
                 overflow: "hidden",
                 textOverflow: "ellipsis",}}>
                 <span style={labelStyle}>Complaint Details:</span> {complaintData.comment}
        </Typography>

        <Typography variant="body1" component="p" sx={textStyle}>
        <span style={labelStyle}>Venue:</span> {complaintData.venue}
        </Typography>
        <Typography variant="body1" component="p" sx={textStyle}>
          <span style={{ color: complaintData.status === "Accepted" ? "red" : complaintData.status === "Pending" ? "red" : "green"}}>
            {complaintData.status === "Accepted" ? "Revoked" : complaintData.status === "Declined" ? "Accepted" : complaintData.status || "Pending"}
          </span>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default HCard5;