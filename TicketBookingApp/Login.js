import React, { useState } from "react";
import Guest from "./Guest";
import User from "./User";

function Login() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div align="center">

      <h1>Ticket Booking Application</h1>

      {isLoggedIn ? (
        <>
          <button onClick={handleLogout}>Logout</button>
          <User />
        </>
      ) : (
        <>
          <button onClick={handleLogin}>Login</button>
          <Guest />
        </>
      )}

    </div>
  );
}

export default Login;