import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//

import "./App.css";

//

import Navbar from "./components/Navbar.static";
import "./styles/navbar.css";

import SignUpPage from "./components/Signup.static";
import LoginPage from "./components/Login.static";
import "./styles/signup_login.css";

import Todolist from "./components/Todolist.component";
import "./styles/todolist.css";

import ProfilePage from "./components/Profile.static";
import "./styles/profile.css";

//

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" Component={Todolist} />
        <Route exact path="/todolist" Component={Todolist} />
        <Route exact path="/signup" Component={SignUpPage} />
        <Route exact path="/login" Component={LoginPage} />
        <Route exact path="/profile" Component={ProfilePage} />
        <Route path="*" element={<h1>404 Not Found</h1>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
