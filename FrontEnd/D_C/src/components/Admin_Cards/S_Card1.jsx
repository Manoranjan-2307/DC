import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography, Grid, Box, Button } from "@mui/material";
import MyLocationOutlinedIcon from '@mui/icons-material/MyLocationOutlined';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import UpdateOutlinedIcon from '@mui/icons-material/UpdateOutlined';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import PersonIcon from '@mui/icons-material/Person';

const S_Card1 = ({ complaint }) => {
  const [attendance, setAttendance] = useState(complaint.status || "pending");
  const [buttonsDisabled, setButtonsDisabled] = useState(true); 
  // Internal state to force re-render if needed
  const [reload, setReload] = useState(false);

  useEffect(() => {
    // Parse the date (DD-MM-YYYY)
    const [day, month, year] = complaint.date.split("-").map(Number);
    console.log('Date parts:', { day, month, year });
    
    // Parse time (HH:MM AM/PM)
    const [timeStr, modifier] = complaint.time.split(" ");
    let [hours, minutes] = timeStr.split(":").map(Number);
    console.log('Time parts:', { hours, minutes, modifier });
    
    // Convert 12-hour to 24-hour format
    if (modifier === "PM" && hours < 12) {
      hours = hours + 12;
    }
    if (modifier === "AM" && hours === 12) {
      hours = 0;
    }
    console.log('Converted hours:', hours);

    // Create event date time object
    const eventDateTime = new Date(year, month - 1, day, hours, minutes);
    const oneHourAfterEvent = new Date(eventDateTime.getTime() + 60 * 60 * 1000);
    
    console.log('Original date string:', complaint.date);
    console.log('Original time string:', complaint.time);
    console.log('Event DateTime:', eventDateTime.toLocaleString());
    console.log('One Hour After:', oneHourAfterEvent.toLocaleString());
    
    const updateButtonState = () => {
      const currentTime = new Date();
      const timeDiffInMinutes = (currentTime - eventDateTime) / (1000 * 60);
      
      // Enable buttons only if current time is within one hour of event time
      const isWithinWindow = timeDiffInMinutes >= 0 && timeDiffInMinutes <= 60;
      
      console.log('Current Time:', currentTime.toLocaleString());
      console.log('Time Difference (minutes):', Math.floor(timeDiffInMinutes));
      console.log('Is Within Window:', isWithinWindow);
      
      setButtonsDisabled(!isWithinWindow);
    };

    // Initial check
    updateButtonState();

    // Update every second
    const interval = setInterval(updateButtonState, 1000);

    // Cleanup
    return () => clearInterval(interval);
  }, [complaint.date, complaint.time]);

  const handleAttendance = (status) => {
  console.log("Updating attendance to:", status);
  setAttendance(status);

    fetch("http://localhost:5000/api/update-attendance", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        sId: complaint.sId,
        venue: complaint.venue,
        date: complaint.date,
        status: status,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("API Response:", data);
        if (data.message === "Attendance updated successfully") {
          console.log("Attendance updated successfully!");
          setReload(!reload); 
        } else {
          console.error("Error:", data.message);
        }
      })
      .catch((error) => {
        console.error("Error updating attendance:", error);
      });
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

  const getAttendanceColor = () => {
    if (attendance === "present") return "green";
    if (attendance === "absent") return "red";
    return "red";
  };

  return (
    <Card
      sx={{
       
        width: "25vw",
        minHeight: "230px", 
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
      <CardContent>
        <Typography
          variant="h6"
          sx={{
            fontFamily: "sans-serif",
            fontSize: "1.1rem",
            color: "#E65100",
            fontWeight: 600,
            marginBottom: "10px",
          }}
        >
          ENQUIRY MEETING
        </Typography>
        
            <Typography variant="body1" sx={textStyle}>
              <PersonIcon sx={{mr: 1, color: 'black'}} />: {complaint.sId}
            </Typography>
            <Typography variant="body1" sx={{...textStyle,
                  display: "-webkit-box",
                  WebkitLineClamp: 1,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
              }}>
              <MyLocationOutlinedIcon  sx={{mr: 1, color: 'black'}}/>: {complaint.venue}
            </Typography>
            <Typography variant="body1" sx={textStyle}>
              <EventNoteOutlinedIcon sx={{mr: 1, color: 'black'}} />: {complaint.date}
            </Typography>
            <Typography variant="body1" sx={textStyle}>
              <UpdateOutlinedIcon sx={{mr: 1, color: 'black'}} />: {complaint.time}
            </Typography>
            <Typography variant="body1" sx={{...textStyle,
                       display: "-webkit-box",
                       WebkitLineClamp: 2,
                       WebkitBoxOrient: "vertical",
                       overflow: "hidden",
                       textOverflow: "ellipsis",}}>
              <BorderColorIcon sx={{mr: 1, color: 'black'}}/>: {complaint.info}
            </Typography>
            <Typography variant="body1" sx={textStyle}>
              <HowToRegIcon sx={{mr: 1, color: 'black'}} />:
              <span style={{ color: getAttendanceColor(), marginLeft: "5px" }}> {attendance}</span>
            </Typography>
          
      </CardContent>
      <Grid container justifyContent="flex-end" spacing={1}>
        <Grid item>
          <Button
            variant="contained"
            color="success"
            sx={{ fontFamily: "sans-serif", fontSize: "0.95rem" }}
            onClick={() => handleAttendance("present")}
            disabled={buttonsDisabled}
          >
            Present
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="error"
            sx={{ fontFamily: "sans-serif", fontSize: "0.95rem" }}
            onClick={() => handleAttendance("absent")}
            disabled={buttonsDisabled}
          >
            Absent
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
};

export default S_Card1;
