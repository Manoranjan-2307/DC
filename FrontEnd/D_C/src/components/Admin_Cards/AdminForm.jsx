import React, { useState, useEffect } from "react";
import { TextField, Button, Box, Typography, IconButton, Autocomplete } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import useAdminStore from "../../store/useAdminStore"; 

export default function AdminForm({ onClose }) {
  const [formData, setFormData] = useState({
    studentId: "",
    venue: "",
    date: "",
    time: "",
    reason: "",
  });

  const { students, fetchStudentIds } = useAdminStore(); 

  useEffect(() => {
    fetchStudentIds(); 
  }, [fetchStudentIds]); 

  const handleStudentIdChange = (event, value) => {
    setFormData((prev) => ({
      ...prev,
      studentId: value || "", 
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCancel = () => {
    setFormData({
      studentId: "",
      venue: "",
      date: "",
      time: "",
      reason: "",
    });
    alert("Form Cleared!");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/meeting-details", formData);
      alert(response.data.message);
      setFormData({ studentId: "", venue: "", date: "", time: "", reason: "" });
      onClose(); 
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit meeting details. Please try again.");
    }
  };

  const handleAddAnother = async (e) => {
    e.preventDefault();
    try {
      
      const response = await axios.post("http://localhost:5000/api/meeting-details", formData);
      alert(response.data.message);

      
      setFormData((prev) => ({
        ...prev,
        studentId: "",
      }));
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit meeting details. Please try again.");
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
        animation: "fadeIn 0.3s ease-in-out",
      }}
    >
      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 1.5,
          width: "400px",
          maxHeight: "80vh",
          overflowY: "auto",
          margin: "auto",
          p: 2.5,
          boxShadow: 5,
          borderRadius: 2,
          backgroundColor: "#ffffff",
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#888",
            borderRadius: "4px",
          },
        }}
        component="form"
        onSubmit={handleSubmit}
      >
        <IconButton
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            "&:hover": {
              backgroundColor: "#f0f0f0",
            },
          }}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>

        <Typography
          variant="h6"
          textAlign="center"
          gutterBottom
          sx={{ mb: 2, fontWeight: 500, fontFamily: "Tahoma", color: "#5E3181" }}
        >
          Create Meeting
        </Typography>

        {/* Searchable Student ID Field */}
        <Autocomplete
          options={students} 
          getOptionLabel={(option) => option} 
          value={formData.studentId} 
          onChange={handleStudentIdChange} 
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search Student ID"
              size="small"
              fullWidth
              sx={{ mb: 1 }}
            />
          )}
        />

        <TextField
          size="small"
          label="Venue"
          name="venue"
          value={formData.venue}
          onChange={handleChange}
          required
          fullWidth
          sx={{ mb: 1 }}
        />

        <TextField
          size="small"
          label="Date"
          name="date"
          type="date"
          value={formData.date}
          onChange={handleChange}
          required
          fullWidth
          InputLabelProps={{ shrink: true }}
          sx={{ mb: 1 }}
        />

        <TextField
          size="small"
          label="Time"
          name="time"
          type="time"
          value={formData.time}
          onChange={handleChange}
          required
          fullWidth
          InputLabelProps={{ shrink: true }}
          sx={{ mb: 1 }}
        />

        <TextField
          size="small"
          label="Reason"
          name="reason"
          value={formData.reason}
          onChange={handleChange}
          required
          fullWidth
          multiline
          rows={3}
          sx={{ mb: 2 }}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "10px",
          }}
        >
          <Button
            type="button"
            variant="contained"
            color="error"
            sx={{
              width: "120px",
              height: "36px",
              borderRadius: "3px",
              textTransform: "none",
              fontFamily: "sans-serif",
              backgroundColor: "#FF5E5E",
            }}
            onClick={handleCancel}
          >
            Clear
          </Button>

          <Button
            type="button"
            variant="contained"
            color="primary"
            sx={{
              width: "120px",
              height: "36px",
              borderRadius: "3px",
              textTransform: "none",
              fontFamily: "sans-serif",
              fontSize: "0.8rem",
              backgroundColor: "#FFA500"
            }}
            onClick={handleAddAnother}
          >
            Add Another
          </Button>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{
              width: "120px",
              height: "36px",
              borderRadius: "3px",
              textTransform: "none",
              fontFamily: "sans-serif",
            }}
          >
            Create <i className="bi bi-plus-lg" style={{ marginLeft: "8px" }}></i>
          </Button>
        </div>
      </Box>
    </div>
  );
}