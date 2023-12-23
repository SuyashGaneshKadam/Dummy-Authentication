import React, { useState } from "react";
import Login from "./Components/Login";
import Profile from "./Components/Profile";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      {!isLoggedIn ? (
        <Login
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
          setIsLoggedIn={setIsLoggedIn}
        />
      ) : (
        <Profile setIsLoggedIn={setIsLoggedIn}/>
      )}
    </div>
  );
};

export default App;
