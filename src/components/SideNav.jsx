import React from "react";
import { NavLink } from "react-router-dom";

function SideNav() {
  return (
    <header id="header" className="header dark-background d-flex flex-column">
      <i className="header-toggle d-xl-none bi bi-list"></i>

      <div className="profile-img">
        <img
          src="assets\img\Screenshot (2087).png"
          alt=""
          className="img-fluid rounded-circle "
        />
      </div>

      <div className="logo d-flex align-items-center justify-content-center">
        {/* <img src="assets/img/logo.png" alt="" /> */}
        <h1 className="sitename">Shikhar Agrawal</h1>
        {/* <h2 className="sitename">(Data Analyst)</h2> */}
      </div>

      <div className="social-links text-center">
        <a
          href="https://www.linkedin.com/in/shikhar-agrawal-3301401b9/"
          target="_blank"
          className="linkedin"
        >
          <i className="bi bi-linkedin"></i>
        </a>
        <a
          href="https://github.com/Sh1khar7"
          className="github"
          target="_blank"
        >
          <i className="bi bi-github"></i>
        </a>
      </div>

      <nav id="navmenu" className="navmenu">
        <ul>
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => ({ color: isActive ? "#fff" : "grey" })}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/expedu"
              style={({ isActive }) => ({ color: isActive ? "#fff" : "grey" })}
            >
              Education & Experience
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/proachieve"
              style={({ isActive }) => ({ color: isActive ? "#fff" : "grey" })}
            >
              Projects & Achievements
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/skills"
              style={({ isActive }) => ({ color: isActive ? "#fff" : "grey" })}
            >
              Skills
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              style={({ isActive }) => ({ color: isActive ? "#fff" : "grey" })}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default SideNav;
