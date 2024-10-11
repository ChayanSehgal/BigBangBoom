import React from "react";
import { FaUser, FaEnvelope } from "react-icons/fa";
import "./Dashboard.css";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("user")) || {};

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">BIG BANG BOOM !!</h2>
      <div
        className="user-info-container"
        style={{
          background: `url('https://www.bigbangboom.biz/unsplash/FyD3OWBuXnY/2015/company.jpg?unique=ec8e32b5') no-repeat center center`,
          backgroundSize: "cover",
        }}
      >
        <h3 className="user-info-title">User Info</h3>
        <div className="user-info">
          <FaUser className="info-icon" />
          <span className="info-text">{user.name || "No name found"}</span>
        </div>
        <div className="user-info">
          <FaEnvelope className="info-icon" />
          <span className="info-text"> {user.email || "No email found"}</span>
        </div>
        {user.photo && (
          <img src={user.photo} alt="Profile" className="user-image" />
        )}
      </div>
    </div>
  );
};

export default Dashboard;

// import React from "react";
// import "./Dashboard.css";

// const Dashboard = () => {
//   const user = JSON.parse(localStorage.getItem("user"));

//   return (
//     <div className="dashboard-container">
//       <h2 className="dashboard-title">Dashboard</h2>
//       <div className="user-info-container">
//         <h3 className="user-info-title">User Info</h3>
//         <p className="user-info">Name: {user ? user.name : "No name found"}</p>
//         <p className="user-info">
//           Email: {user ? user.email : "No email found"}
//         </p>
//         {user.photo && (
//           <img src={user.photo} alt="Profile" className="user-image" />
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
