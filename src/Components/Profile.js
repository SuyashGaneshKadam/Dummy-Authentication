import React from "react";
import "../Profile.css";

const Profile = ({
    setIsLoggedIn
  }) => {
  let userData = JSON.parse(localStorage.getItem("userData"));
  return (
    <div className="success">
      <h3 id="sign-up">Signup Successful!</h3>
      <div className="profile-pic">
        <h2>Profile</h2>
        <img className="user-dp" src={userData.image} alt="User Img" />
      </div>
      <div className="user-info">
        <p>Full Name: {userData.firstName + " " + userData.lastName}</p>
        <p>Email: {userData.email}</p>
        <p>Gender: {userData.gender}</p>
      </div>
      <button id="logout" style={{ color: "whitesmoke" }} onClick={() => {setIsLoggedIn(false)}}>
        LOGOUT
      </button>
    </div>
  );
};

export default Profile;
