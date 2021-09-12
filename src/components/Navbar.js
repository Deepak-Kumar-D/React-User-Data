import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
import { FaUserCircle } from "react-icons/fa";

function Navbar() {
  return (
    <div className="navbar">
      <h3>
        <span>
          <FaUserCircle />
        </span>
        UserData
      </h3>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/create">Create</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
