import React from "react";
import "../App.css";

const Profile = ({ setIsLoggedIn }) => {
  let userData = JSON.parse(localStorage.getItem("userData"));
  return (
    <div className="container">
      <div className="success">
        <h3 id="sign-up">Signup Successful!</h3>
        <div className="profile-pic">
          <h2 id="profile">Profile</h2>
          <img className="user-dp" src={userData.image} alt="User Img" />
        </div>
        <div className="user-info">
          <p>Full Name: {userData.firstName + " " + userData.lastName}</p>
          <p>Email: {userData.email}</p>
          <p>Gender: {userData.gender}</p>
        </div>
        <button
          id="logout"
          onClick={() => {
            setIsLoggedIn(false);
          }}
        >
          LOGOUT
        </button>
      </div>
    </div>
  );
};

export default Profile;
