import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography, Grid, Button } from "@mui/material";
import axios from "axios";

const AdminCard3 = ({ onCreateClick }) => {
  const [adminComplaints, setAdminComplaints] = useState([]);
  

  useEffect(() => {
    const fetchAllComplaints = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/admin-all");
        setAdminComplaints(res.data);
      } catch (error) {
        console.error("Error fetching admin complaints:", error);
      }
    };

    fetchAllComplaints();
  }, []);

  const formatDateOnly = (rawDate) => {
    if (!rawDate) return "INVALID DATE";
  
    const dateObj = new Date(rawDate);
  
    if (isNaN(dateObj)) {
      console.error("Invalid date object:", rawDate);
      return "INVALID DATE FORMAT";
    }
  
    const formattedDate = dateObj
      .toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
      .toUpperCase();
  
    return formattedDate;
  };

  
  
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
    marginRight: "5px",
  };

  return (
    <Grid container spacing={3} justifyContent="center">
      {adminComplaints.map((complaint, index) => (
        <Grid item key={complaint.ID || index} xs={12} sm={6} md={4}>
          <Card
            sx={{
              height: "250px", 
             
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: 2,
              borderRadius: "14px",
              backgroundColor: "#FFFFFF",
              border: "1px solid #D9D4D4",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              fontFamily: "Tahoma",
              width: "24vw",
            }}
          >
           <Grid container justifyContent="space-between" alignItems="center">
         
          <Grid item>
            <Button
              variant="contained"
              onClick={onCreateClick}
              color="primary"
              sx={{
                backgroundColor: "#1f80e0",
                color: "#FFFFFF",
                fontSize: "0.7rem",
                fontFamily: "sans-serif",
                fontWeight: 500,
                textTransform: "none",
                borderRadius: "3px",
                padding: "2px 10px",
                "&:hover": {
                  backgroundColor: "#1f80e0",
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
              {formatDateOnly(complaint.Date_)}
            </Typography>
          </Grid>
        </Grid>
            <CardContent>
              <Typography variant="body1" sx={textStyle}>
                <span style={labelStyle}>Name:</span>{" "}
                {complaint.student_name || "N/A"}
              </Typography>
              <Typography variant="body1" sx={textStyle}>
                <span style={labelStyle}>Register No:</span>{" "}
                {complaint.S_ID || "N/A"}
              </Typography>
              <Typography variant="body1" sx={textStyle}>
                <span style={labelStyle}>Venue:</span>{" "}
                {complaint.Venue || "N/A"}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  ...textStyle,
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                <span style={labelStyle}>Issue:</span>{" "}
                {complaint.Comment || "N/A"}
              </Typography>
              <Typography variant="body1" sx={textStyle}>
                <span style={labelStyle}>Issued By:</span>{" "}
                {complaint.faculty || "N/A"}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default AdminCard3;
