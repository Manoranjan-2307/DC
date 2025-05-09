import React, {useState, useEffect} from "react";
import { Card, CardContent, Typography, Grid, Box, Button } from "@mui/material";
import MyLocationOutlinedIcon from '@mui/icons-material/MyLocationOutlined';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import UpdateOutlinedIcon from '@mui/icons-material/UpdateOutlined';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import PersonIcon from '@mui/icons-material/Person';

const S_Card3 = () => {
  const [attendance, setAttendance] = useState('pending');
  const [buttonsDisabled, setButtonsDisabled] = useState(true);

  const eventDate = "2025-05-08"; 
  const eventTime = "14:00"; // 24-hour format

  useEffect(() => {
    // Parse date and time components
    const [year, month, day] = eventDate.split("-").map(Number);
    const [hour, minute] = eventTime.split(":").map(Number);
    
    // Create event date time object
    const eventDateTime = new Date(year, month - 1, day, hour, minute);
    const oneHourAfterEvent = new Date(eventDateTime.getTime() + 60 * 60 * 1000);

    // console.log('Event Time:', eventDateTime.toString());
    // console.log('One Hour After:', oneHourAfterEvent.toString());

    const updateButtonState = () => {
      const currentTime = new Date();
      // console.log('Current Time:', currentTime.toString());
      
      // Check if current time is within the one-hour window
      const isWithinWindow = currentTime >= eventDateTime && currentTime <= oneHourAfterEvent;
      // console.log('Is Within Window:', isWithinWindow);
      
      setButtonsDisabled(!isWithinWindow);
    };

    // Initial check
    updateButtonState();

    // Check every second
    const interval = setInterval(updateButtonState, 1000);

    // Cleanup interval
    return () => clearInterval(interval);
  }, [eventDate, eventTime]);

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

  const getAttendancecolor = () =>{
    if (attendance == 'present'){
      return 'green';
    }
    if (attendance == 'absent'){
      return 'red';
    }
    return 'red';
    
  }

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
      <Box display="flex" alignItems="center" justifyContent="space-between" marginBottom="10px" sx={{minHeight: "10px"}}>
    <Typography
      variant="h6"
      sx={{
        fontFamily: "sans-serif",
        fontSize: "1.1rem",
        color: "#E65100",
        fontWeight: 600,
      }}
    >
      ENQUIRY MEETING
    </Typography>
    <Button
  variant="contained"
  color="primary"
  style={{
    backgroundColor: "#1f80e0",
    color: "white",
    fontSize: "0.7rem",
    width: "70px",
    height: "25px",
    fontFamily: "sans-serif",
    borderRadius: "2px",
  }}
  component="label"
>
  PDF <i className="bi bi-cloud-upload" style={{ marginLeft: "5px", marginTop: "2px" }}></i>
  <input
    type="file"
    hidden
    accept="application/pdf"
    onChange={async (e) => {
      const file = e.target.files[0];
      if (file) {
        const studentId = "7376242AD199"; // Replace with dynamic student ID if needed
        const formData = new FormData();
        formData.append("pdf", file);
        formData.append("student_id", studentId);

        try {
          const response = await fetch("http://localhost:5000/api/student-pdfs", {
            method: "POST",
            body: formData,
          });

          const data = await response.json();
          if (response.ok) {
            alert("PDF uploaded successfully!");
          } else {
            alert(`Error: ${data.message}`);
          }
        } catch (error) {
          console.error("Error uploading PDF:", error);
          alert("An error occurred while uploading the PDF.");
        }
      }
    }}
  />
</Button>
  </Box>
        
          <Typography variant="body1" component="p" sx={textStyle}>
          <PersonIcon sx={{mr: 1, color: 'black'}} />: 7376242AD199
            </Typography>

            <Typography variant="body1" component="p" sx={{...textStyle,
                  display: "-webkit-box",
                  WebkitLineClamp: 1,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
              }}>
              <MyLocationOutlinedIcon  sx={{mr: 1, color: 'black'}}/>: Faculty Hall - 1 (New Mechanical Block)
            </Typography>
            <Typography variant="body1" component="p" sx={textStyle}>
              <EventNoteOutlinedIcon sx={{mr: 1, color: 'black'}} />: 4.04.2025
            </Typography>
            <Typography variant="body1" component="p" sx={textStyle}>
              <UpdateOutlinedIcon sx={{mr: 1, color: 'black'}} />: 3:00 PM
            </Typography>
            <Typography variant="body1" component="p" sx={{...textStyle,
                       display: "-webkit-box",
                       WebkitLineClamp: 2,
                       WebkitBoxOrient: "vertical",
                       overflow: "hidden",
                       textOverflow: "ellipsis",}}>
              <BorderColorIcon sx={{mr: 1, color: 'black'}}/>: Enquiry for the complaint filed on 30.03.2025 at 11:00 AM
            </Typography>
            <Typography variant="body1" component="p" sx={textStyle}>
              <HowToRegIcon sx={{mr: 1, color: 'black'}} />:
              <span style={{color: getAttendancecolor(), marginLeft: "5px"}}>{attendance}</span>
            </Typography>
          
      </CardContent>
      <Grid container justifyContent="flex-end" spacing={1}>
          <Grid item>
            <Button
              variant="contained"
              color="success"
              sx={{ fontFamily: "sans-serif", fontSize: "0.95rem" }}
              onClick={ () => setAttendance('present')}
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
              onClick={ () => setAttendance('absent')}
              disabled={buttonsDisabled} 
            >
              Absent
            </Button>
          </Grid>
        </Grid>
      </Card>
  );
};

export default S_Card3;