import React from "react";

const Header = (props) => (
  <div className="header">
    <div className="grid">
      <div className="start">
        <a href="/">HOME</a>
      </div>
      <div className="end">
        {props.username ? (
          <span className="username">
            <i className="far fa-user"></i>
            {props.username}
          </span>
        ) : (
          <>
            <a href="/login">Login</a>
            <a href="/">Register</a>
          </>
        )}
      </div>
    </div>
  </div>
);

export default Header;
