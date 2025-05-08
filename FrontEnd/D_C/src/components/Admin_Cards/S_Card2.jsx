import React, { useState, useEffect} from "react";
import { Card, CardContent, Typography, Grid, Box, Button } from "@mui/material";
import MyLocationOutlinedIcon from '@mui/icons-material/MyLocationOutlined';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import UpdateOutlinedIcon from '@mui/icons-material/UpdateOutlined';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import PersonIcon from '@mui/icons-material/Person';


const S_Card2 = () => {
  const [attendance, setAttendance] = useState('pending');
  const [buttonsDisabled, setButtonsDisabled] = useState(false); 
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
    else if (attendance == 'absent'){
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
        
            <Typography variant="body1" component="p" sx={textStyle}>
                <PersonIcon sx={{mr: 1, color: 'black'}} />: 7376242AD267
            </Typography>
            <Typography variant="body1" component="p" sx={{...textStyle,
                  display: "-webkit-box",
                  WebkitLineClamp: 1,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
              }}>
              <MyLocationOutlinedIcon  sx={{mr: 1, color: 'black'}}/>: Faculty Hall - 3 (New Mechanical Block)
             
            </Typography>
            <Typography variant="body1" component="p" sx={textStyle}>
              <EventNoteOutlinedIcon sx={{mr: 1, color: 'black'}} />: 10.04.2025
            </Typography>
            <Typography variant="body1" component="p" sx={textStyle}>
              <UpdateOutlinedIcon sx={{mr: 1, color: 'black'}} />: 2:00 PM
            </Typography>
            <Typography variant="body1" component="p" sx={{...textStyle,
                       display: "-webkit-box",
                       WebkitLineClamp: 2,
                       WebkitBoxOrient: "vertical",
                       overflow: "hidden",
                       textOverflow: "ellipsis",}}>
              <BorderColorIcon sx={{mr: 1, color: 'black'}}/>: Enquiry for the complaint filed on 02.04.2025 at 02:00 PM
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
            >
              Absent
            </Button>
          </Grid>
        </Grid>
    </Card>
  );
};

export default S_Card2;