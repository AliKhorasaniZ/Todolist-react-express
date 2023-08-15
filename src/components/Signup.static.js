import React from "react";

import { fetchPOSTData } from "../api/controller.api";

function SignUpPage() {
  const userNameRef = React.useRef();
  const emailRef = React.useRef();
  const passwordRef = React.useRef();
  const passwordConfirmationRef = React.useRef();

  const [modal, setModal] = React.useState();

  function submitHandler(event) {
    event.preventDefault();

    const userName = userNameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (passwordRef.current.value !== passwordConfirmationRef.current.value) {
      setModal("Passwords dont match");
      return;
    }

    if (userName === "" || email === "" || password === "") {
      setModal("Empty field value");
      return;
    }

    const newUser = {
      userName,
      email,
      password,
    };

    function setToken(token) {
      window.localStorage.setItem("token", token);
      window.location.href = "/todolist";
    }

    fetchPOSTData("/signup", newUser, setToken, setModal);
  }

  return (
    <>
      <h1>Sign Up</h1>
      <div className="centerDiv">
        <form className="flexContainer">
          <label htmlFor="userName">Username: </label>
          <input type="text" id="userName" ref={userNameRef} />

          <label htmlFor="email">Email: </label>
          <input type="text" id="email" ref={emailRef} />

          <label htmlFor="password">Password: </label>
          <input type="text" id="password" ref={passwordRef} />

          <label htmlFor="passwordConfirmation">Re-enter password: </label>
          <input
            type="text"
            id="passwordConfirmation"
            ref={passwordConfirmationRef}
          />
          <div className="butCont signUp">
            <button type="submit" onClick={submitHandler}>
              Create new user
            </button>
          </div>
        </form>
      </div>
      <h2 className="modal">{modal}</h2>
    </>
  );
}

export default SignUpPage;
