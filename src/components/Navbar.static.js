import React from "react";
import { Link } from "react-router-dom";

import { fetchGETData } from "../api/controller.api";

// ------------------------------------------

function Navbar() {
  const [userName, setUserName] = React.useState(null);

  React.useEffect(() => {
    const token = window.localStorage.getItem("token");
    token && fetchGETData("/profileIcon", token, setUserName);
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="miniCont">
          <div className="division">
            <h2>@AliKhorasaniZ</h2>
          </div>
          <div className="division">
            <div className="item">
              <Link to="/todolist" id="link">
                Todolist
              </Link>
              <div />
            </div>
          </div>
          <div className="division">
            <Profile userName={userName} />
          </div>
        </div>
      </nav>
    </>
  );
}

// ------------------------------------------

function Profile({ userName }) {
  const [showDropDown, setShowDropDown] = React.useState(false);

  const isLoggedIn = userName ? true : false;

  return (
    <div className="profile" onClick={() => setShowDropDown(!showDropDown)}>
      <h3>{isLoggedIn ? userName : "Default User"}</h3>
      {showDropDown && <ProfileDropDownMenue isLoggedIn={isLoggedIn} />}
    </div>
  );
}

// ------------------------------------------

function ProfileDropDownMenue({ isLoggedIn }) {
  function DropDownList() {
    if (isLoggedIn) {
      return (
        <>
          <SubMenuItem link="/todolist" icon="fa fa-list-check">
            View tasks
          </SubMenuItem>
          <SubMenuItem link="/profile" icon="fa fa-user">
            View profile
          </SubMenuItem>
          <span
            onClick={() => {
              window.localStorage.clear();
              window.location.href = "/";
            }}
          >
            <SubMenuItem link={null} icon="fas fa-right-from-bracket">
              Log out
            </SubMenuItem>
          </span>
        </>
      );
    }

    return (
      <>
        <SubMenuItem link="/login" icon="fas fa-right-to-bracket">
          Login
        </SubMenuItem>
        <SubMenuItem link="/signup" icon="fas fa-user-plus">
          Sign up
        </SubMenuItem>
      </>
    );
  }

  function SubMenuItem({ link, icon, children }) {
    return (
      <Link to={link} id="link" className="subMenuLink">
        <i className={icon} />
        <p>{children}</p>
      </Link>
    );
  }

  return (
    <div className="subMenu">
      <hr />
      <DropDownList />
    </div>
  );
}

export default Navbar;
