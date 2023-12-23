import React, { useState } from "react";
// import axios from "axios";

const Login = ({
  username,
  setUsername,
  password,
  setPassword,
  setIsLoggedIn,
}) => {
  const [error, setError] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.message) {
          setError(data.message);
          return;
        }
        localStorage.setItem("userData", JSON.stringify(data));
        setUsername("");
        setPassword("");
        // setError("");
        setIsLoggedIn(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <p id="welcome">Welcome back!👋</p>
        <h2>Login in to your account</h2>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <div className="password">
          <input
            id="password"
            className="password-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error.trim() && <p id="error">{error}</p>}
        <button className="submit">CONTINUE</button>
        <p id="forgot-password">Forgot your password?</p>
      </form>
      <p id="sign-up-button">
        Don't have an account? <a href="#">Sign up</a>
      </p>
    </div>
  );
};

export default Login;
