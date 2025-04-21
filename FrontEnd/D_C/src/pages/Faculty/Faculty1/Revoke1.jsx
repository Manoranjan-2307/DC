import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../../styles/revoke1.css"; 

const Revoke1 = () => {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    fetchComplaints();
  }, []);

  const fetchComplaints = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/revoked");
      setComplaints(response.data);
      console.log(response.data)
    } catch (err) {
      console.error("Error fetching complaints:", err);
    }
  };

  const updateStatus = async (roll_no, status) => {
    try {
      await axios.put(`http://localhost:5000//${roll_api/revokedno}`, { status });
      fetchComplaints(); // Refresh after action
    } catch (err) {
      console.error("Error updating status:", err);
    }
  };

  return (
    <div className="revoke-container">
      <h2>Revoked Complaints</h2>
      <div className="revoke-grid">
        {complaints.map((complaint) => (
          <div
            key={complaint.Roll_no}
            className={`revoke-card ${complaint.STATUS_?.toLowerCase()}`}
          >
            <div className="revoke-card-header">
              <p><strong>Name:</strong> {complaint.S_name}</p>
              <p><strong>Register Number:</strong> {complaint.Roll_no}</p>
              <p><strong>Reason:</strong> {complaint.REASON}</p>
            </div>

            {complaint.STATUS_ ? (
              <p className={`status-text ${complaint.STATUS_ === "Accepted" ? "accepted" : "declined"}`}>
                Status: {complaint.STATUS_}
              </p>
            ) : (
              <div className="button-group">
                <button className="accept-btn" onClick={() => updateStatus(complaint.Roll_no, "Accepted")}>ACCEPT</button>
                <button className="decline-btn" onClick={() => updateStatus(complaint.Roll_no, "Declined")}>DECLINE</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Revoke1;