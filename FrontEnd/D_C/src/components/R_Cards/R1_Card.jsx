import React, { useState } from "react";
import { Typography, Box, Button, Modal, TextField } from "@mui/material";

let openbox = () => {};

export function ReasonModal({studentId,status_}) {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  openbox = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const handleSubmit = async () => {
    console.log("Submitting reason:", text, studentId, status_);
    try {
      const response = await fetch("http://localhost:5000/api/reason", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text,studentId,status_ })
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const result = await response.json();
      console.log("Reason submitted:", result);
    } catch (error) {
      console.error("Error submitting reason:", error);
    } finally {
      setText(""); 
      handleClose(); 
      console.log("Reason submitted successfully:",text);
    }
  };
  

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          backgroundColor: "#fff7ec",
          width: 500,
          p: 3,
          borderRadius: 2,
          mx: "auto",
          mt: "20vh",
          boxShadow: 5,
        }}
      >
        <Typography variant="h6"  style={{fontFamily: "sans-serif", fontWeight: 500, color: "#555555"}}>
          Reason:
        </Typography>
        <TextField
          fullWidth
          multiline
          rows={4}
          value={text}
          onChange={(e) => setText(e.target.value)}
          sx={{ mt: 1 }}
        />
        <Button
          variant="contained"
          onClick={handleSubmit}
          sx={{ mt: 2, backgroundColor: "green", ml: 22 }}
        >
          Submit
        </Button>
      </Box>
    </Modal>
  );
}

export { openbox };
