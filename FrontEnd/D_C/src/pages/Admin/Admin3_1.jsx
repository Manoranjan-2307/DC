import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import axios from "axios";

export default function Admin3_1() {
  const [formData, setFormData] = useState({
    studentId: "",
    venue: "",
    date: "",
    time: "",
    reason: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Add your logic to handle form submission here (e.g., API call)
    try {
      const response = await axios.post("http://localhost:5000/api/meeting-details", formData);
      alert(response.data.message); // Show success message
      setFormData({ studentId: "", venue: "", date: "", time: "", reason: "" }); // Reset form
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit meeting details. Please try again.");
    }
  };

  return (
    <div style={{ marginLeft: "500px", marginTop: "120px", marginBottom: "30px" }}>
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: "450px",
        margin: "auto",
        mt: 5,
        p: 3,
        boxShadow: 3,
        borderRadius: 2,
        backgroundColor: "#f9f9f9",
      }}
    >
  
        <Typography variant="h5" textAlign="center" gutterBottom>
          Create Meeting
        </Typography>

        <TextField
          label="Student ID"
          name="studentId"
          value={formData.studentId}
          onChange={handleChange}
          required
          fullWidth
        />

        <TextField
          label="Venue"
          name="venue"
          value={formData.venue}
          onChange={handleChange}
          required
          fullWidth
        />

        <TextField
          label="Date"
          name="date"
          type="date"
          value={formData.date}
          onChange={handleChange}
          required
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
        />

        <TextField
          label="Time"
          name="time"
          type="time"
          value={formData.time}
          onChange={handleChange}
          required
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
        />

        <TextField
          label="Reason"
          name="reason"
          value={formData.reason}
          onChange={handleChange}
          required
          fullWidth
          multiline
          rows={4}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
        >
          Create
        </Button>
      </Box>
    </div>
  );
}