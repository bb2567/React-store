import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => (
  <div className="header">
    <div className="grid">
      <div className="start">
        <Link to="/">HOME</Link>
      </div>
      <div className="end">
        {props.user.nickname ? (
          <span className="nickname">
            <i className="far fa-user"></i>
            {props.user.nickname}
          </span>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </div>
  </div>
);

export default Header;
