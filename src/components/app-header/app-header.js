import React from "react";
import "./app-header.css";
import { Link } from "react-router-dom";

const AppHeader = ({ isLogged }) => {
  const redirectToLogin = (
    <>
      <Link to="/login" className="nav-link">
        Profile
      </Link>
    </>
  );

  const redirectToProfile = (
    <>
      <Link to="/profile" className="nav-link">
        Profile
      </Link>
    </>
  );
  const profile = isLogged ? redirectToProfile : redirectToLogin;
  return (
    <nav className="app-header navbar">
      <div className="container">
        <Link to="/" className="navbar-brand">
          EventBiz<span>Pro</span>
        </Link>

        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/news" className="nav-link">
              News
            </Link>
          </li>
          <li className="nav-item">{profile}</li>
        </ul>
      </div>
    </nav>
  );
};

export default AppHeader;
