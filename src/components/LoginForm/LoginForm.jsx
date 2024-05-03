import React, { useState } from "react";
import "./loginForm.css";

export default function LoginForm({ onLogin }) {
  const userDetails = {
    username: "adminrt_01",
    password: "wargart_01",
  };

  const [userLogin, setUserLogin] = useState({
    username: "",
    password: "",
  });

  const dataConfirmation = (e) => {
    e.preventDefault();
    if (
      userLogin.username === userDetails.username &&
      userLogin.password === userDetails.password
    ) {
      onLogin(true);
    } else {
      alert("ERROR, password/username not match");
    }
  };

  const handleInputChange = (e) => {
    setUserLogin({ ...userLogin, [e.target.name]: e.target.value });
  };

  return (
    <div id="login-form">
      <form onSubmit={dataConfirmation}>
        <fieldset id="form-fieldset">
          <legend>LOGIN</legend>
          <label htmlFor="username">
            Username:
            <input
              id="username"
              type="text"
              name="username"
              value={userLogin.username}
              onChange={handleInputChange}
              required
            />
          </label>
          <label htmlFor="password">
            Password:
            <input
              id="password"
              type="password"
              name="password"
              value={userLogin.password}
              onChange={handleInputChange}
              required
            />
          </label>
          <button id="login-button" type="submit">
            Login
          </button>
          <div className="login-note">
            <p>* Untuk username & password silahkan tanyakan ke Pengurus RT</p>
          </div>
        </fieldset>
      </form>
    </div>
  );
}
