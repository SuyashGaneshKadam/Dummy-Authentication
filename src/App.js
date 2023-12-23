import React, { useState } from "react";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  function handleSubmit(e){
    e.preventDefault();
  }
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <p id="welcome">Welcome back!👋</p>
        <h2>Sign up to your account</h2>
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
        <button className="submit">CONTINUE</button>
        <p id="forgot-password">Forgot your password?</p>
        <p id="error">Error</p>
      </form>
      <p id="sign-up-button">
        Don't have an account? <a href="#">Sign up</a>
      </p>
    </div>
  );
};

export default App;
