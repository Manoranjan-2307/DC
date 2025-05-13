import axios from "axios";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../pages/firebase";

export const handleLogin = async (username, password, navigate) => {
  try {
    
    const response = await axios.post("http://localhost:5000/api/login", {
      username,
      password,
    });

    const { route, S_ID, username: studentName } = response.data;

    // alert("Login successful!");

    
    navigate(route, { state: { studentId: S_ID, studentName } });
  } catch (error) {
    console.error("Login error:", error);
    if (error.response && error.response.data) {
      alert(error.response.data.message);
    } else {
      alert("An error occurred during login. Please try again.");
    }
  }
};

// Google Sign-In logic
export const handleGoogleLogin = async (navigate) => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

   
    console.log("Google User:", user);

    
    if (user.email === "manoranjanm.ad24@bitsathy.ac.in") {
      navigate("/student1_1");
    } else if (user.email === "manomurugesh2007@gmail.com") {
      navigate("/admin1");
    } else {
      alert("Access Denied! Only authorized users can log in.");
    }

  } catch (error) {
    console.error("Google Sign-In Error:", error);
    alert("Google Sign-In failed. Please try again.");
  }
};


export const handleStaticLogin = (username, password, navigate) => {
  // Static credentials for faculty and admin
  const staticUsers = {
    admin: { username: "admin", password: "@min", route: "/admin1" },
    faculty: { username: "faculty", password: "pass", route: "/logger1" },
    supportdesk: { username: "Supportdesk", password: "#sd", route: "/supportdesk" },
  };

  const user = Object.values(staticUsers).find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    // alert("Login successful!");
    navigate(user.route); 
    return true; 
  } else {
    return false; 
  }
};