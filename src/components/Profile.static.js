import React from "react";

import { fetchGETData } from "../api/controller.api";

function ProfilePage() {
  const [profile, setProfile] = React.useState(null);

  React.useEffect(() => {
    const token = window.localStorage.getItem("token");
    token && fetchGETData("/profile", token, setProfile);
  }, []);

  return profile && <ProfilePage />;

  function ProfilePage() {
    return (
      <section className="wrapCont">
        <div className="profileContainer">
          <h2 className="subItem">{profile.userName}</h2>
          <h3 className="subItem">{profile.email}</h3>
          <h3 className="subItem">Creation date: {profile.createdAt}</h3>
        </div>
      </section>
    );
  }
}

export default ProfilePage;
