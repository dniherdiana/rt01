/* // import React from "react";
import { useState } from "react";
import "./loginForm.css";

export default function LoginForm() {
  const [userLogin, setUserLogin] = useState({
    username: "",
    password: "",
  });

  const dataConfirmation = (e) => {
    e.preventDefault();
    if (
      userLogin.username === "adminrt_01" &&
      userLogin.password === "wargart_01"
    ) {
      console.log("login berhasil");
      alert("welcome");
    } else {
      alert("ERROR");
    }
  };

  const handleInputChange = () => {
    setUserLogin({ ...userLogin, [e.target.name]: e.target.value });
  };

  return (
    <div id="login-form">
      <form method="post" onSubmit={dataConfirmation}>
        <fieldset id="form-fieldset">
          <legend>LOGIN</legend>
          <label for="username">
            Username:
            <input
              id="username"
              type="text"
              name="username"
              value={setUserLogin.username}
              onChange={handleInputChange}
              required
            />
          </label>
          <label for="password">
            Password:
            <input
              id="password"
              type="password"
              name="password"
              value={setUserLogin.password}
              onChange={handleInputChange}
            />
          </label>
          <button id="login-button" type="submit">
            Login
          </button>
          <div className="login-note">
            <p> * Untuk username & password silahkan tanyakan ke Pengurus RT</p>
          </div>
        </fieldset>
      </form>
    </div>
  );
}
 */

import React, { useState } from "react";
import "./loginForm.css";

export default function LoginForm() {
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
      console.log("login berhasil");
      alert("Welcome!");
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
              value={setUserLogin.username}
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
              value={setUserLogin.password}
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
