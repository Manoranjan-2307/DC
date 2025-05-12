import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const NotFound = () => {
  return (
    <Box
      sx={{
        width: "80vw", // Occupy 80% of the width
        height: "50vh",
        margin: "0 auto", // Center horizontally
        display: "flex",
        flexDirection: "column",
        alignItems: "center", // Center items vertically
        justifyContent: "center", // Center items horizontally
        padding: "40px 0", // Add vertical padding
        textAlign: "center", // Center text
        border: "3px solid #F0F0F0", // Optional: Add a border for clarity
        borderRadius: "8px", // Optional: Add rounded corners
        backgroundColor: "#fff",
      }}
    >
      {/* Circle with Close Icon */}
      <IconButton
        sx={{
          width: "60px",
          height: "60px",
          backgroundColor: "#f5f5f5",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          marginBottom: "10px", // Spacing between circle and text
        }}
        disableRipple
      >
        <CloseIcon sx={{ fontSize: "30px", color: "#757575" }} />
      </IconButton>

      {/* Text */}
      <Typography
        variant="h6"
        sx={{
          fontFamily: "Tahoma",
          fontWeight: 500,
          fontSize: "18px",
          color: "#333",
        }}
      >
        Not Applicable!
      </Typography>
    </Box>
  );
};

export default NotFound;