import React from "react";
import { Card, CardContent, Typography, Grid, Box } from "@mui/material";
import MyLocationOutlinedIcon from '@mui/icons-material/MyLocationOutlined';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import UpdateOutlinedIcon from '@mui/icons-material/UpdateOutlined';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import HowToRegIcon from '@mui/icons-material/HowToReg';
const M1_Card = () => {
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
    <Card
      sx={{
        
          width: "25vw",
          minHeight: "210px", 
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
        
            <Typography variant="body1" component="p" sx={{...textStyle,
                  display: "-webkit-box",
                  WebkitLineClamp: 1,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
              }}>
              <MyLocationOutlinedIcon sx={{mr: 1, color: 'black'}} />: Faculty Hall - 1 (New Mechanical Block)
            </Typography>
            <Typography variant="body1" component="p" sx={textStyle}>
                <EventNoteOutlinedIcon sx={{mr: 1, color: 'black'}}/>: 4-04-2025
            </Typography>
            <Typography variant="body1" component="p" sx={textStyle}>
                <UpdateOutlinedIcon sx={{mr: 1, color: 'black'}}/>: 3:00 PM
            </Typography>
            <Typography variant="body1" sx={{...textStyle,
                       display: "-webkit-box",
                       WebkitLineClamp: 2,
                       WebkitBoxOrient: "vertical",
                       overflow: "hidden",
                       textOverflow: "ellipsis",}}>
                       <BorderColorIcon sx={{mr:1, color: 'black'}}/>:  Enquiry for the complaint filed on 03.04.2025 at 03:00 PM. This is a severe 
                       complaint filed against you. kindly be on time.
                     </Typography>
            <Typography variant="body1" component="p" sx={textStyle}>
              <HowToRegIcon  sx={{mr: 1, color: 'black'}}/>:
              <span style={{color: "red", marginLeft: "10px"}}>N/A</span>
            </Typography>
          
      </CardContent>
      
    </Card>
  );
};

export default M1_Card;