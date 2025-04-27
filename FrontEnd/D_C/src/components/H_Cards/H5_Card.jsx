import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
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

    // Optional: refresh every 10 seconds to stay updated
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


  return (
    <Card
      sx={{
        width: '25vw',
        margin: '0 auto',
        padding: 2,
        borderRadius: '14px',
        backgroundColor: '#FFFFFF',
        border: '1px solid #D9D4D4',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        fontFamily: 'Tahoma',
      }}
    >
      <Grid container justifyContent="flex-end" alignItems="center">
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
      <CardContent>
        <Typography variant="body1" component="p" sx={textStyle}>
        <span style={labelStyle}>Issue:</span> {complaintData.comment}
        </Typography>
        <Typography variant="body1" component="p" sx={textStyle}>
        <span style={labelStyle}>Venue:</span> {complaintData.venue}
        </Typography>
        <Typography variant="body1" component="p" sx={textStyle}>
          {/* <strong style={{ color: '#000' }}>Status:</strong>{" "} */}
          <span style={{ color: complaintData.status === "Accepted" ? "green" : "red" }}>
            {complaintData.status || "Pending"}
          </span>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default HCard5;