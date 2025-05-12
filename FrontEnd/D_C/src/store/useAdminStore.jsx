import { useState, useCallback } from "react";
import axios from "axios";

export default function useAdminStore() {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState(null);

  const fetchStudentIds = useCallback(async () => {
    try {
      const response = await axios.get("http://localhost:5000/students");
      setStudents(response.data.map((student) => student.S_ID)); // Extract only S_ID
      setError(null); // Clear any previous errors
    } catch (err) {
      console.error("Error fetching student IDs:", err);
      setStudents([]);
      setError(err.response?.data?.message || "Failed to fetch student IDs");
    }
  }, []); // Memoize the function with an empty dependency array

  return { students, error, fetchStudentIds };
}