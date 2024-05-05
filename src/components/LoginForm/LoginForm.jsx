import React, { useState } from "react";
import "./loginForm.css";

export default function LoginForm({ onLoad, userType }) {
  const userDetails = {
    rt: { username: "adminrt_01", password: "wargart_01" },
    ruko: { username: "adminrt_01", password: "ruko_rt01" },
  };

  const [userLogin, setUserLogin] = useState({
    username: "",
    password: "",
  });

  const dataConfirmation = (e) => {
    e.preventDefault();
    const currentUserDetails = userDetails[userType || "rt"];
    if (
      userLogin.username === currentUserDetails.username &&
      userLogin.password === currentUserDetails.password
    ) {
      onLoad(true);
      alert("Login berhasil");
    } else {
      onLoad(false);
      alert("password/username salah");
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
