import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const F1_Sidebar = () => {
  const location = useLocation();
  const [collapsed] = useState(true); 

  return (
    <div
      className="d-flex flex-column text-white vh-100 p-3"
      style={{
        backgroundColor: "black", 
        width: collapsed ? "100px" : "290px",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        transition: "width 0.3s ease",
      }}
    >
      <button
        className="btn btn-outline-light mb-3" style={{marginTop: "8px"}}
      >
        <i className="bi bi-list-ul fs-4" ></i>

      </button>

      <div style={{ marginTop: "40px" }}>
        <ul className="nav flex-column fs-5 mt-5">
          <div className="my-3 mx-1" style={{ fontFamily: "Tahoma" }}>
            <NavItem to="/student1_1" icon="bi-box-arrow-in-right" label="Logger" collapsed={collapsed} location={location} />
          </div>
          <div className="my-3 mx-1" style={{ fontFamily: "Tahoma" }}>
            <NavItem to="/student1_2" icon="bi bi-people" label="Mentor" collapsed={collapsed} location={location} />
          </div>
          <div className="my-3 mx-1" style={{ fontFamily: "Tahoma" }}>
            <NavItem to="/student1_3" icon="bi bi-back" label="Revoke" collapsed={collapsed} location={location} />
          </div>
          <div className="my-3 mx-1" style={{ fontFamily: "Tahoma" }}>
            <NavItem to="/" icon="bi-box-arrow-left" label="Log-out" collapsed={collapsed} location={location} />
          </div>
        </ul>
      </div>
    </div>
  );
};


const NavItem = ({ to, icon, label, collapsed, location }) => {
  const isActive = location.pathname === to;

  return (
    <li className="nav-item">
      <Link to={to} className="nav-link d-flex align-items-center text-light">
        <i
          className={`bi ${icon} fs-5`}
          style={{ color: isActive ? "red" : "inherit" }}
        ></i>
        {!collapsed && <span className="ms-3">{label}</span>}
      </Link>
    </li>
  );
};

export default F1_Sidebar;