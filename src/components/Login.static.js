import React from "react";

import { fetchPOSTData } from "../api/controller.api";

function LoginPage() {
  const userNameRef = React.useRef();
  const passwordRef = React.useRef();

  const [modal, setModal] = React.useState();

  function submitHandler(event) {
    event.preventDefault();

    const userName = userNameRef.current.value;
    const password = passwordRef.current.value;

    if (userName === "" || password === "") {
      setModal("Passwords dont match");
      return;
    }

    const userInformation = {
      userName,
      password,
    };

    function setToken(token) {
      window.localStorage.setItem("token", token);
      window.location.href = "/todolist";
    }

    fetchPOSTData("/login", userInformation, setToken, setModal);
  }

  return (
    <>
      <h1>Log in</h1>
      <div className="centerDiv">
        <form className="flexContainer">
          <label htmlFor="userName">Username: </label>
          <input type="text" id="userName" ref={userNameRef} />

          <label htmlFor="password">Password: </label>
          <input type="text" id="password" ref={passwordRef} />

          <div className="butCont logIn">
            <button type="submit" onClick={submitHandler}>
              Sign in
            </button>
          </div>
        </form>
      </div>
      <h2 className="modal">{modal}</h2>
    </>
  );
}

export default LoginPage;
