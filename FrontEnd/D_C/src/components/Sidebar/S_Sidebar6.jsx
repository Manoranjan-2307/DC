import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const S_Sidebar6 = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [collapsed] = useState(true);

  // Retrieve studentId and studentName from the current location state
  const { studentId, studentName } = location.state || {};

  // Redirect to login if studentId or studentName is missing
  if (!studentId || !studentName) {
    alert("Session expired. Please log in again.");
    navigate("/login");
    return null;
  }

  return (
    <div
      className="d-flex flex-column text-white vh-100 p-3"
      style={{
        backgroundColor: "#2F2F2F",
        width: collapsed ? "100px" : "290px",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        transition: "width 0.3s ease",
      }}
    >
      <button className="btn btn-outline-light mb-3" style={{ marginTop: "8px" }}>
        <i className="bi bi-list-ul fs-4"></i>
      </button>

      <div style={{ marginTop: "40px" }}>
        <ul className="nav flex-column fs-5 mt-5">
          <div className="my-3 mx-1" style={{ fontFamily: "Tahoma" }}>
            <NavItem
              to="/recent_complaints"
              icon="bi-house"
              label="Home"
              collapsed={collapsed}
              location={location}
              state={{ studentId, studentName }} // Pass state
            />
          </div>
          <div className="my-3 mx-1" style={{ fontFamily: "Tahoma" }}>
            <NavItem
              to="/complaint_history"
              icon="bi-clock-history"
              label="History"
              collapsed={collapsed}
              location={location}
              state={{ studentId, studentName }} // Pass state
            />
          </div>
          <div className="my-3 mx-1" style={{ fontFamily: "Tahoma" }}>
            <NavItem
              to="/meetings"
              icon="bi-calendar"
              label="Schedules"
              collapsed={collapsed}
              location={location}
              state={{ studentId, studentName }} // Pass state
            />
          </div>
          <div className="my-3 mx-1" style={{ fontFamily: "Tahoma" }}>
            <NavItem
              to="/apologies"
              icon="bi-file-earmark"
              label="Documents"
              collapsed={collapsed}
              location={location}
              state={{ studentId, studentName }} // Pass state
            />
          </div>
          <div className="my-3 mx-1" style={{ fontFamily: "Tahoma" }}>
            <NavItem
              to="/"
              icon="bi-box-arrow-right"
              label="Log-out"
              collapsed={collapsed}
              location={location}
            />
          </div>
        </ul>
      </div>
    </div>
  );
};

const NavItem = ({ to, icon, label, collapsed, location, state }) => {
  const isActive = location.pathname === to;

  return (
    <li className="nav-item">
      <Link
        to={to}
        state={state} // Pass state to the Link component
        className="nav-link d-flex align-items-center text-light"
      >
        <i
          className={`bi ${icon} fs-5`}
          style={{ color: isActive ? "red" : "inherit" }}
        ></i>
        {!collapsed && <span className="ms-3">{label}</span>}
      </Link>
    </li>
  );
};

export default S_Sidebar6;