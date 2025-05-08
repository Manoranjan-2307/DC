import React, { useState, useEffect}from "react";
import { Card, CardContent, Typography, Grid, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Welcome_Card = () => {
  const navigate = useNavigate();
  const [totalCount, setTotalCount] = useState(0);
  const [pendingCount, setPendingCount] = useState(0);
  const [resolvedCount, setResolvedCount] = useState(0);

  useEffect(() => {
    const fetchComplaintCounts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/meeting-details");
        const meetingDetails = response.data;
        const total = meetingDetails.length;

        
        const resolved = meetingDetails.filter(
          (meeting) => meeting.status === "present" || meeting.status === "absent"
        ).length;

        
        const pending = total - resolved;

       
        setTotalCount(total);
        setResolvedCount(resolved);
        setPendingCount(pending);
      } catch (error) {
        console.error("Error fetching complaint counts:", error);
      }
    };

    fetchComplaintCounts();
  }, []);


  const boxCommonStyle = {
    padding: "10px 14px",
    borderRadius: "10px",
    fontFamily: "Helvetica",
    fontSize: "1.2rem",
    fontWeight: 500,
    display: "inline-block",
    color: "#000",
    cursor: "pointer",
    transition: "all 0.2s ease-in-out",
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.15)',
    },
  };

  return (
    <Card
      sx={{
        width: "30vw",
        margin: "0 auto",
        padding: 2,
        borderRadius: "14px",
        backgroundColor: "#FAF3F0",
        border: "1px solid #D9D4D4",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        fontFamily: "Tahoma",
      }}
    >
      <Grid container justifyContent="center" alignItems="center">
        <Typography
          variant="body2"
          sx={{
            fontFamily: "sans-serif",
            fontSize: "1.5rem",
            fontWeight: 600,
            color: "#555555",
            textAlign: "center",
            marginBottom: "10px",
          }}
        >
          OVERVIEW
        </Typography>
      </Grid>
      <CardContent style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <Box
          sx={{ ...boxCommonStyle, backgroundColor: "#FFE5B4" }}
          onClick={() => navigate("/admin2")}
        >
          Total Complaints: {totalCount}
        </Box>

        <Box
          sx={{ ...boxCommonStyle, backgroundColor: "#FFD6D6" }}
          onClick={() => navigate("/admin3_2")}
        >
          Pending: {pendingCount}
        </Box>

        <Box
          sx={{ ...boxCommonStyle, backgroundColor: "#D6FFD6" }}
          onClick={() => navigate("/admin3_2")}
        >
          Resolved: {resolvedCount}
        </Box>
      </CardContent>
    </Card>
  );
};

export default Welcome_Card;
