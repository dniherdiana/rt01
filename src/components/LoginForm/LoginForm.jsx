// import React from "react";
import "./loginForm.css";

export default function LoginForm() {
  return (
    <div id="login-form">
      <form method="post" action="#">
        <fieldset id="form-fieldset">
          <legend>LOGIN</legend>
          <label for="username">
            Username:
            <input id="username" type="text" name="username" required />
          </label>
          <label for="password">
            Password:
            <input id="password" type="password" name="password" />
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
